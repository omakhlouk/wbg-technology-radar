# WBG Technology & Innovation Radar

A single interactive radar and a guided film rendered from the same research records, sector definitions, coordinates and drawing code.

## Open, share, display

- [Interactive radar](https://omakhlouk.github.io/wbg-technology-radar/#radar)
- [Guided film and downloads](https://omakhlouk.github.io/wbg-technology-radar/?view=film#film)
- [Hologram MP4 — 1080 × 1080](https://omakhlouk.github.io/wbg-technology-radar/radar-hologram-1080.mp4?v=2026.11.24.7)
- [Presentation MP4 — 1920 × 1080](https://omakhlouk.github.io/wbg-technology-radar/radar-widescreen-1080.mp4?v=2026.11.24.7)
- [QR PNG](radar-qr.png), [QR SVG](radar-qr.svg), [QR poster](radar-qr-poster.png)

Both films are 180-second, 30 fps H.264 MP4s without audio. The square film has a black surround and circular composition for a front-facing hologram display. Device-specific layouts, mirroring and rotation must follow the actual display specification.

The QR opens the public interactive radar. The existing public URL and QR remain valid.

## This edition — 24 November 2026

134 company and ecosystem-builder profiles; 41 technology trends; 17 proposed use cases; 282 source records; 42 recent signals.

The latest research pass adds 32 profiles, expands 12 existing profiles, and includes 68 newly reviewed source records. The inherited broad research date remains 23 November 2026. Publication dates and profile/source review dates are distinct. The five film spotlights have canonical capabilities, concise potential applications and WBG source links.

This is a curated, source-linked snapshot, not an exhaustive or automatically updated market census. Each profile retains its own review date. Company availability, announced plans, research previews and established products are differentiated. WBG references provide institutional context; proposed applications do not claim WBG adoption or endorsement.

The three perspectives are:

1. WBG development: public services, climate and Earth, agriculture and food, health/skills/jobs, energy/infrastructure, finance/firms/trade.
2. ITS and enterprise: software, knowledge/agents, data/forecasting, trust/identity, cloud/reliability, models/interfaces.
3. Frontier: work/agents, models/interfaces, agent foundations, physical/spatial AI, science/simulation, compute/quantum.

## Interface

The interface follows the supplied TI direction: a dark navy radar canvas, a restrained blue glow, pale content surfaces, the existing WBG wordmark, and an Arial-based font stack. Details appear on selection rather than surrounding the radar with permanent explanation panels.

Select a sector or point, switch perspective or company/trend mode, search, open filters, adjust name density, save records, or use Explore for every record. Source links and related WBG work appear inside each profile. Explore also exposes use cases and recent signals. Export downloads the currently filtered data as CSV. Shortlists are stored only in the visitor's browser.

Positions remain fixed when filters change. The overview deliberately shows a limited number of names; all records remain reachable through the directory. The film uses the same layout and includes five company close-ups: Sarvam AI, SatSure, Factory, Reducto and LILA Sciences.

## Architecture

- `data.json`: canonical research, definitions, company/trend relationships and source records.
- `data.js`: the same data serialized for static browser loading.
- `radar-core.js`: shared deterministic layout, filtering, drawing and hit testing.
- `radar-film.js`: the 180-second camera tour using RadarCore and canonical company fields.
- `app.js`, `index.html`, `styles.css`: interactive explorer, profiles, directory and film player.
- `scripts/render-radar.mjs`: offline Node-canvas capture plus FFmpeg encoding.
- `scripts/verify-radar.mjs`: research integrity, layout and film-provenance checks.
- `research/`: source research and provenance for the refresh.
- `build.json`: published release and asset hashes.
- MP4 sidecar JSON files: input fingerprints, format, duration and output SHA-256.

The previous separate showcase model, renderer and duplicate company dataset have been removed. Existing `showcase.html` and `research.html` URLs redirect to the unified application.

## Run and export

The site is buildless and has no server-side application, visitor sign-in or API key. Serve the repository root using an ordinary static web server. For example:

```sh
python3 -m http.server 8080
```

For video generation, install Node.js, FFmpeg and the package dependencies:

```sh
npm install
node scripts/render-radar.mjs --format square --crf 21 --preset faster
node scripts/render-radar.mjs --format wide --crf 21 --preset faster
node scripts/verify-radar.mjs
```

To review still frames before encoding:

```sh
node scripts/render-radar.mjs --format square --preview
node scripts/render-radar.mjs --format wide --preview
```

Pass `--font-dir /path/to/licensed/Arial` to use local Arial font binaries. No commercial fonts are distributed in this repository. The delivered films use Liberation Sans as an Arial-metric-compatible fallback; their sidecar metadata records this. The WBG logo remains its original vector wordmark.

Always regenerate both MP4s after changing canonical data, radar geometry, the film timeline or the logo. The provenance verifier rejects a film whose input fingerprints do not match the current files.

## Publication

GitHub Pages publishes the root of the `main` branch. Commit a consistent release only after the data, website and both films pass verification. Preserve the existing public address and QR destination.

The source archive contains the current source and research; videos are provided separately to keep the archive practical. Restore both MP4s and their metadata from the public links if deploying the archive elsewhere.

Release: `2026.11.24.7`.
