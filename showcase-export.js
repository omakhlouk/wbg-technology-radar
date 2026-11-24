/* Canvas-only recording. No screen, microphone or account permissions required. */
(function (global) {
  'use strict';

  const MIME_TYPES = [
    'video/mp4;codecs=avc1.640028',
    'video/mp4;codecs=avc1.42E028',
    'video/webm;codecs=vp9',
    'video/webm;codecs=vp8',
    'video/webm'
  ];
  let recording = false;

  function capabilities() {
    const hasRecorder = typeof global.MediaRecorder === 'function';
    const hasCanvasStream = typeof global.HTMLCanvasElement === 'function' &&
      typeof global.HTMLCanvasElement.prototype.captureStream === 'function';
    const mimeType = hasRecorder && hasCanvasStream
      ? MIME_TYPES.find(type => global.MediaRecorder.isTypeSupported(type)) || null
      : null;
    return { supported: !!mimeType, mimeType, extension: mimeType ? (mimeType.includes('mp4') ? 'mp4' : 'webm') : null };
  }

  function abortError() {
    return new DOMException('Recording cancelled. No video was saved.', 'AbortError');
  }

  function validateSize(width, height) {
    if (!Number.isInteger(width) || !Number.isInteger(height) || width < 256 || height < 256 ||
        width > 3840 || height > 3840 || width % 2 || height % 2) {
      throw new Error('Choose an even video width and height between 256 and 3840 pixels.');
    }
  }

  function makeCanvas(width, height) {
    validateSize(width, height);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) throw new Error('This browser could not create the video canvas.');
    return { canvas, ctx };
  }

  /**
   * Render callback: renderFrame(ctx, elapsedSec, width, height).
   * Progress callback receives {state, elapsedSec, durationSec, progress}.
   * Recording happens in real time. Hidden tabs pause both the video and clock.
   * A separate canvas keeps output resolution independent of the visible stage.
   */
  async function record(options = {}) {
    if (recording) throw new Error('A video is already being recorded. Finish or cancel it first.');
    recording = true;
    try { return await startRecording(options); }
    finally { recording = false; }
  }

  async function startRecording({ canvas: sourceCanvas, width = 1920, height = 1080, durationSec = 120,
      fps = 30, renderFrame, onProgress, signal, videoBitsPerSecond } = {}) {
    const support = capabilities();
    if (!support.supported) throw new Error('This browser cannot record the radar directly. Use a current desktop Chrome, Edge or Safari browser, or record the clean presentation with your usual screen recorder.');
    if (!Number.isFinite(durationSec) || durationSec < 1 || durationSec > 600) throw new Error('Choose a recording duration between 1 and 600 seconds.');
    if (!Number.isFinite(fps) || fps < 1 || fps > 60) throw new Error('Choose a frame rate between 1 and 60.');
    if (typeof renderFrame !== 'function' && !sourceCanvas) throw new Error('The radar is not ready to record yet.');
    if (signal?.aborted) throw abortError();
    if (document.hidden) throw new Error('Keep the radar tab visible when starting a recording.');
    if (document.fonts?.ready) await document.fonts.ready;
    if (signal?.aborted) throw abortError();
    const output = makeCanvas(width, height);
    const draw = typeof renderFrame === 'function'
      ? elapsed => renderFrame(output.ctx, elapsed, width, height)
      : () => output.ctx.drawImage(sourceCanvas, 0, 0, width, height);
    draw(0);

    let stream;
    let recorder;
    try {
      stream = output.canvas.captureStream(fps);
      recorder = new global.MediaRecorder(stream, {
        mimeType: support.mimeType,
        videoBitsPerSecond: videoBitsPerSecond || Math.round(Math.min(24000000, Math.max(6000000, width * height * fps * 0.18)))
      });
    } catch (error) {
      stream?.getTracks().forEach(track => track.stop());
      throw new Error('This browser could not start video encoding. Try a smaller output size or another desktop browser. ' + (error?.message || ''));
    }
    return new Promise((resolve, reject) => {
      const chunks = [];
      let animationId = null;
      let stoppingTimer = null;
      let elapsedBeforePause = 0;
      let activeSince = null;
      let lastDraw = -Infinity;
      let lastProgress = -Infinity;
      let finished = false;
      let finalizing = false;
      let paused = false;
      let failure = null;
      const durationMs = durationSec * 1000;
      const frameInterval = 1000 / fps;

      function elapsedMs(now = performance.now()) {
        return Math.min(durationMs, elapsedBeforePause + (activeSince === null ? 0 : now - activeSince));
      }

      function progress(state, elapsed = elapsedMs() / 1000) {
        if (typeof onProgress !== 'function') return;
        try {
          onProgress({ state, elapsedSec: elapsed, durationSec, progress: Math.min(1, elapsed / durationSec) });
        } catch (_) { /* A status display must not interrupt the encoder. */ }
      }

      function cancelAnimation() {
        if (animationId !== null) cancelAnimationFrame(animationId);
        animationId = null;
      }

      function cleanup() {
        cancelAnimation();
        clearTimeout(stoppingTimer);
        document.removeEventListener('visibilitychange', onVisibility);
        global.removeEventListener('pagehide', onPageHide);
        signal?.removeEventListener('abort', onAbort);
        stream.getTracks().forEach(track => track.stop());
        output.canvas.width = 1;
        output.canvas.height = 1;
      }

      function settle() {
        if (finished) return;
        finished = true;
        const mimeType = recorder.mimeType || support.mimeType;
        const blob = new Blob(chunks, { type: mimeType });
        cleanup();
        if (failure) return reject(failure);
        if (!blob.size) return reject(new Error('The browser returned an empty video. Keep this tab visible and try recording again.'));
        progress('complete', durationSec);
        resolve({ blob, mimeType, extension: mimeType.includes('mp4') ? 'mp4' : 'webm', width, height, durationSec, fps });
      }

      function stop(error) {
        if (finished) return;
        if (finalizing) {
          failure = failure || error || null;
          return;
        }
        failure = error || null;
        finalizing = true;
        cancelAnimation();
        activeSince = null;
        if (!failure) progress('finalizing', durationSec);
        stoppingTimer = setTimeout(() => {
          failure = failure || new Error('The video encoder did not finish. Try again in a current desktop browser.');
          settle();
        }, 10000);
        if (recorder.state !== 'inactive') {
          try { recorder.stop(); } catch (error) { failure = failure || error; settle(); }
        } else {
          settle();
        }
      }

      function tick(now) {
        animationId = null;
        if (finished || finalizing || paused || document.hidden) return;
        const elapsed = elapsedMs(now);
        if (elapsed - lastDraw >= frameInterval - 2 || elapsed >= durationMs) {
          try { draw(elapsed / 1000); } catch (error) {
            stop(new Error('A frame could not be rendered. ' + (error?.message || '')));
            return;
          }
          lastDraw = elapsed;
        }
        if (elapsed - lastProgress >= 200) {
          progress('recording', elapsed / 1000);
          lastProgress = elapsed;
        }
        if (elapsed >= durationMs) {
          // Keep the last rendered frame in the recording until the next paint.
          animationId = requestAnimationFrame(() => stop());
        } else {
          animationId = requestAnimationFrame(tick);
        }
      }

      function pause() {
        if (paused || finalizing || finished) return;
        elapsedBeforePause = elapsedMs();
        activeSince = null;
        paused = true;
        cancelAnimation();
        if (recorder.state === 'recording') recorder.pause();
        progress('paused');
      }

      function resume() {
        if (!paused || finalizing || finished || document.hidden) return;
        if (recorder.state === 'paused') recorder.resume();
      }

      function onVisibility() {
        if (document.hidden) pause();
        else resume();
      }
      function onAbort() { stop(abortError()); }
      function onPageHide() { stop(new Error('Recording stopped because the page was closed or navigated away. Open the radar and record again.')); }

      recorder.addEventListener('dataavailable', event => {
        if (event.data?.size) chunks.push(event.data);
      });
      recorder.addEventListener('error', event => stop(new Error('Video encoding failed. ' + (event.error?.message || 'Try a smaller output size or another browser.'))));
      recorder.addEventListener('stop', settle, { once: true });
      recorder.addEventListener('start', () => {
        if (finalizing || finished) return;
        activeSince = performance.now();
        progress('recording', 0);
        if (document.hidden) pause();
        else animationId = requestAnimationFrame(tick);
      }, { once: true });
      recorder.addEventListener('pause', () => {
        if (!document.hidden) resume();
      });
      recorder.addEventListener('resume', () => {
        if (finalizing || finished) return;
        paused = false;
        activeSince = performance.now();
        if (document.hidden) pause();
        else {
          progress('recording');
          animationId = requestAnimationFrame(tick);
        }
      });
      document.addEventListener('visibilitychange', onVisibility);
      global.addEventListener('pagehide', onPageHide);
      signal?.addEventListener('abort', onAbort, { once: true });
      try {
        recorder.start(1000);
        if (signal?.aborted) onAbort();
      } catch (error) {
        stop(new Error('The browser could not begin recording. ' + (error?.message || '')));
      }
    });
  }

  async function snapshot({ canvas: sourceCanvas, width = 1920, height = 1080, renderFrame, timeSec = 0 } = {}) {
    if (document.fonts?.ready) await document.fonts.ready;
    const output = makeCanvas(width, height);
    if (typeof renderFrame === 'function') renderFrame(output.ctx, timeSec, width, height);
    else if (sourceCanvas) output.ctx.drawImage(sourceCanvas, 0, 0, width, height);
    else throw new Error('The radar is not ready to capture yet.');
    return new Promise((resolve, reject) => output.canvas.toBlob(blob => {
      output.canvas.width = 1;
      output.canvas.height = 1;
      if (blob) resolve({ blob, mimeType: 'image/png', extension: 'png', width, height });
      else reject(new Error('The browser could not create the image.'));
    }, 'image/png'));
  }

  global.RadarVideoExport = Object.freeze({ record, snapshot, capabilities });
})(typeof window !== 'undefined' ? window : globalThis);
