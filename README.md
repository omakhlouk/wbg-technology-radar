# WBG Technology & Innovation Radar

An interactive technology radar for WBG development, ITS capabilities and the wider frontier, with a separate hologram film.

This edition includes **37 trends, 102 startups and ecosystem builders, 17 use cases and 214 source entries**. The broad landscape was checked on **23 November 2026**; the company close-ups and selected WBG references were refreshed on **24 November 2026**.

## Explore, share and display

- [Interactive radar](https://omakhlouk.github.io/wbg-technology-radar/)
- [Hologram and video studio](https://omakhlouk.github.io/wbg-technology-radar/showcase.html)
- [Clean square hologram view](https://omakhlouk.github.io/wbg-technology-radar/showcase.html?mode=hologram&clean=1&play=1)
- [Hologram MP4: 1080 × 1080, 180 seconds](https://omakhlouk.github.io/wbg-technology-radar/radar-hologram-1080.mp4?v=2026.11.24.5)
- [Presentation MP4: 1920 × 1080, 180 seconds](https://omakhlouk.github.io/wbg-technology-radar/radar-widescreen-1080.mp4?v=2026.11.24.5)
- [QR code PNG](radar-qr.png) · [QR code SVG](radar-qr.svg)
- [WBG-branded QR poster](radar-qr-poster.png)

The homepage is a customizable explorer. Click a radar area for its topics, companies and WBG references; click a named company or trend for its profile, official website and evidence. Switch between WBG, ITS and Frontier, filter by topic or horizon, search, adjust name labels, expand the radar, compare companies and save a shortlist. The matching-results list exposes every filtered record. **Copy this view** preserves the current filters; **Share / QR** offers a verified code that always opens the full interactive homepage.

Earlier `research.html` links and root cinema URLs remain compatible. The two film addresses are unchanged.

The separate showcase tells a three-minute story with 12 trend scenes, 5 company close-ups and 63 featured builders. The camera zooms into Sarvam AI, SatSure, Factory, Reducto and LILA Sciences to explain functions and potential relevance to documented WBG work. Six scenes address WBG development priorities, four address ITS capabilities and two cover scientific and physical AI. Readable labels rotate through all 102 names across the full loop. The square film uses a pure black background and a circular safe area. It is a front-facing composition; match the display manufacturer's required format.

The studio provides scene selection, playback, named-company search, evidence and insight dialogs, full-screen cinema view, mirroring, PNG export and custom browser recordings. Browsers use MP4/H264 when supported and WebM otherwise. The two provided films are H264 MP4, 30fps, without audio. Storyboard reviewed 24 November 2026; the underlying research cutoff remains 23 November, with the targeted research refresh recorded separately. Every scene names a WBG reference; company applications remain proposed connections.

## Hosting

GitHub Pages publishes the files in the root of the `main` branch. In Settings → Pages, the publishing source is **Deploy from a branch**, **main**, **/(root)**. Subsequent commits to the website files update the site automatically. No application server, API key or visitor account is needed.

The research library retains WBG, ITS and Frontier perspectives, source-linked profiles, comparison, use cases, recent signals and a local shortlist. Radar positions describe editorial assessments rather than WBG adoption. Public-good organizations are labelled separately. This is a curated edition, not an exhaustive or continuously refreshed market map.

## Source and maintenance

[Download the source and deployment instructions](source-release.zip). The archive includes the original `dist/` layout, all checked research, the storyboard, data compilers and video renderer. The full-quality MP4s are separate downloads above; `RESTORE_FILMS.md` explains where to place them before deploying the complete site elsewhere. The files at this repository root are the directly published copy; logo paths are adjusted for the flat layout. To rebuild the film, use `scripts/render_showcase_video.mjs` with Node.js, `@napi-rs/canvas`, FFmpeg and `--font-dir` pointing to licensed local Arial Regular and Bold files. The films use actual Arial and the official vector WBG logotype. Font binaries are excluded from the public package.

The original Azure address is a separate deployment. Publishing here does not change the Azure site.

Release: `2026.11.24.6-github-e12a2ceb6865`. `build.json` records hashes of the reviewed website assets.
