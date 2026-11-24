/* Preserve earlier cinema links while the root serves the interactive explorer. */
(function () {
  var params = new URLSearchParams(window.location.search);
  if (['hologram','screen','square','wide'].includes(params.get('mode')) || params.get('clean') === '1') {
    window.location.replace('showcase.html' + window.location.search + window.location.hash);
  }
})();
