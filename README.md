# WBG Technology & Innovation Radar

A cinematic technology radar for WBG development, ITS capabilities and the wider frontier.

This edition includes **37 trends, 102 startups and ecosystem builders, 17 use cases and 200 source entries**, checked on **23 November 2026**.

## Open the radar and films

- [Public showcase](https://omakhlouk.github.io/wbg-technology-radar/)
- [Clean square hologram view](https://omakhlouk.github.io/wbg-technology-radar/?mode=hologram&clean=1&play=1)
- [Hologram MP4: 1080 × 1080, 120 seconds](radar-hologram-1080.mp4)
- [Presentation MP4: 1920 × 1080, 120 seconds](radar-widescreen-1080.mp4)
- [Complete research library](research.html)

The showcase tells a 12-scene, two-minute story with 63 featured builders. Six scenes address WBG development priorities, four address ITS capabilities and two cover scientific and physical AI. Readable labels rotate through all 102 names across the full loop. The square film uses a pure black background and a circular safe area. It is a front-facing composition; match the display manufacturer's required format.

The studio provides scene selection, playback, named-company search, evidence and insight dialogs, full-screen cinema view, mirroring, PNG export and custom browser recordings. Browsers use MP4/H264 when supported and WebM otherwise. The two provided films are H264 MP4, 30fps, without audio. Storyboard reviewed 24 November 2026; the underlying research cutoff remains 23 November, with four source rechecks recorded separately.

## Hosting

GitHub Pages publishes the files in the root of the `main` branch. In Settings → Pages, the publishing source is **Deploy from a branch**, **main**, **/(root)**. Subsequent commits to the website files update the site automatically. No application server, API key or visitor account is needed.

The research library retains WBG, ITS and Frontier perspectives, source-linked profiles, comparison, use cases, recent signals and a local shortlist. Radar positions describe editorial assessments rather than WBG adoption. Public-good organizations are labelled separately. This is a curated edition, not an exhaustive or continuously refreshed market map.

## Source and maintenance

[Download the complete source and Azure deployment package](source-release.zip). The archive includes the original `dist/` layout, all checked research, the storyboard, data compilers, video renderer, films and publication instructions. The files at this repository root are the directly published copy; logo paths are adjusted for the flat layout. To rebuild the film, use `scripts/render_showcase_video.mjs` with Node.js, `@napi-rs/canvas` and FFmpeg.

The original Azure address is a separate deployment. Publishing here does not change the Azure site.

Release: `2026.11.24.4-github-ca5a746bc622`. `build.json` records hashes of the reviewed website assets.
