#!/usr/bin/env python3
"""Verify a frozen checkout, then build its manifest and deterministic source ZIP."""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import zipfile


ROOT = Path(__file__).resolve().parent.parent
FILMS = ("radar-hologram-1080.mp4", "radar-widescreen-1080.mp4")
FILM_INPUTS = (
    "data.js", "company-logos.js", "startup-logos.png", "radar-core.js",
    "radar-film.js", "wbg-logo-white.svg", "radar-qr.png",
)
# Explicit new release files prevent unrelated untracked files entering the ZIP.
NEW_RELEASE_FILES = (
    "company-logos.js", "startup-logos.png",
    "scripts/verify-interactions.mjs", "scripts/package-release.py",
)
EXCLUDED_PARTS = {".git", ".qa", ".openai", "dist", "node_modules", "__pycache__"}
REFRESH_FIELDS = (
    "additionsCount", "updatedCount", "refreshedCompanyCount", "sourceReviewCount",
    "trendAdditionsCount", "trendUpdatesCount", "spotlightEnrichedCount",
)


def sha256(content: bytes) -> str:
    return hashlib.sha256(content).hexdigest()


def utc_time(value: str) -> datetime:
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    if parsed.tzinfo is None:
        raise ValueError("Release timestamps must include a UTC offset or Z")
    return parsed.astimezone(timezone.utc)


def load_logo_manifest(content: bytes) -> dict:
    text = content.decode("utf-8")
    match = re.search(r"COMPANY_LOGOS\s*=\s*Object\.freeze\(", text)
    if not match:
        raise ValueError("Cannot locate the company logo JSON manifest")
    value, _ = json.JSONDecoder().raw_decode(text[match.end():].lstrip())
    return value


def release_files() -> list[str]:
    tracked = subprocess.check_output(
        ["git", "ls-files", "--cached", "-z"], cwd=ROOT
    ).decode("utf-8").split("\0")
    names = set(tracked) | set(NEW_RELEASE_FILES)
    selected = []
    for name in sorted(names):
        if not name or name in {"build.json", "source-release.zip"}:
            continue
        relative = Path(name)
        if relative.is_absolute() or ".." in relative.parts:
            raise ValueError(f"Invalid release path: {name}")
        if EXCLUDED_PARTS.intersection(relative.parts) or name.endswith(".log"):
            continue
        if (ROOT / name).is_file():
            selected.append(name)
    for name in (*FILM_INPUTS, *NEW_RELEASE_FILES, *FILMS, "data.json"):
        if name not in selected:
            raise ValueError(f"Required release file is missing: {name}")
    return selected


def checked_films(snapshot: dict[str, bytes], data: dict) -> list[dict]:
    result = []
    for name in FILMS:
        meta = json.loads(snapshot[name + ".json"])
        if meta.get("file") != name or meta.get("bytes") != len(snapshot[name]):
            raise ValueError(f"Film size or filename is inconsistent: {name}")
        if meta.get("sha256") != sha256(snapshot[name]):
            raise ValueError(f"Film fingerprint is inconsistent: {name}")
        for file in FILM_INPUTS:
            if meta.get("inputs", {}).get(file) != sha256(snapshot[file]):
                raise ValueError(f"Regenerate {name}: its {file} fingerprint is stale")
        if meta.get("dataVersion") != data["meta"]["version"]:
            raise ValueError(f"Film data version is stale: {name}")
        if meta.get("durationSeconds") != 180 or meta.get("fps") != 30:
            raise ValueError(f"Unexpected film duration or frame rate: {name}")
        result.append(meta)
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--release", help="Release identifier; defaults to data.meta.version")
    parser.add_argument("--generated-at", help="Reproducible UTC ISO timestamp; defaults to the latest film creation time")
    parser.add_argument("--node", help="Node executable for release verification")
    args = parser.parse_args()

    names = release_files()
    snapshot = {name: (ROOT / name).read_bytes() for name in names}
    data = json.loads(snapshot["data.json"])
    meta = data["meta"]
    release = args.release or meta["version"]
    if not re.fullmatch(r"\d{4}\.\d{2}\.\d{2}\.\d+", release):
        raise ValueError("Release must use YYYY.MM.DD.N format")
    if release != meta["version"] or release != meta.get("interfaceVersion"):
        raise ValueError("Data, interface and packaged release versions must match")
    logos = load_logo_manifest(snapshot["company-logos.js"])
    films = checked_films(snapshot, data)
    generated = utc_time(args.generated_at) if args.generated_at else max(
        utc_time(film["createdAt"]) for film in films
    )
    if generated.year < 1980:
        raise ValueError("ZIP timestamps must be from 1980 or later")

    node = args.node or os.environ.get("CODEX_PRIMARY_RUNTIME_NODE") or shutil.which("node")
    if not node:
        raise RuntimeError("Node.js is required for release verification")
    for script in ("scripts/verify-radar.mjs", "scripts/verify-interactions.mjs"):
        subprocess.run([node, script], cwd=ROOT, check=True)
    for name, content in snapshot.items():
        if not (ROOT / name).is_file() or sha256((ROOT / name).read_bytes()) != sha256(content):
            raise RuntimeError(f"Source changed during verification; freeze and retry: {name}")

    core_text = snapshot["radar-core.js"].decode("utf-8")
    sweep_match = re.search(r"SWEEP_PERIOD\s*=\s*(\d+)", core_text)
    if not sweep_match:
        raise ValueError("Scanner rotation period is not declared")
    film_text = snapshot["radar-film.js"].decode("utf-8")
    scene_count = len(re.findall(r"\{id:'[^']+',start:", film_text))
    spotlight_ids = re.findall(r"companyId:'([^']+)'", film_text)
    if not scene_count or not spotlight_ids:
        raise ValueError("Film scene metadata could not be read")

    manifest = {
        "release": release,
        "edition": release,
        "sourceRelease": release,
        "generatedAt": generated.isoformat(timespec="seconds").replace("+00:00", "Z"),
        "researchChecked": meta["checked"],
        "latestResearchRefresh": meta.get("lastRefresh", meta["checked"]),
        "spotlightsChecked": meta.get("spotlightsChecked"),
        "researchScope": meta["refreshScope"],
        "counts": {key: len(data[key]) for key in ("companies", "trends", "sources", "opportunities", "signals")},
        "refresh": {key: meta[key] for key in REFRESH_FIELDS},
        "interfaceFixes": {
            "scannerRotationSeconds": int(sweep_match.group(1)),
            "labelGeometry": "Labels remain fixed during hover; highlight changes do not move click targets.",
            "profileActivation": "Semantic label buttons and canvas point targets open the same profiles; pointer gestures preserve their initial target.",
            "gestureHandling": "Dragging, cancelled pointer gestures and page scrolling suppress unintended canvas activation.",
            "motionControls": "Pause and resume preserve the scanner angle; the initial state respects reduced-motion preference.",
            "verification": "scripts/verify-interactions.mjs",
        },
        "identityRefresh": {
            "reviewedAt": logos["verifiedAt"],
            "companyProfiles": len(data["companies"]),
            "companyMarks": len(logos["items"]),
            "initialsFallbacks": sorted(logos["missing"]),
            "assetDescription": "Official company logos and website icons, bundled locally.",
            "provenance": "company-logos.js",
            "atlas": logos["atlas"],
            "researchCorrection": meta.get("identityRefresh"),
        },
        "sharedRenderer": "radar-core.js",
        "canonicalData": "data.json",
        "film": {
            "renderer": "radar-film.js",
            "durationSeconds": 180,
            "fps": 30,
            "scenes": scene_count,
            "spotlights": spotlight_ids,
            "fontFamily": films[0]["fontFamily"],
            "inputFiles": list(FILM_INPUTS),
            "outputs": [{key: film[key] for key in ("file", "format", "width", "height", "bytes", "sha256")} for film in films],
        },
        "sourceArchive": {
            "file": "source-release.zip",
            "includes": "Current application, shared renderers, canonical research, source research, company identity assets and provenance, export/verification/packaging scripts, README, package metadata, film sidecars and this manifest.",
            "excludes": ["MP4 video bytes", ".git", ".qa", ".openai", "dist", "node_modules", "unrelated untracked files"],
            "checksumPolicy": "This manifest excludes its own checksum and the source archive checksum to avoid circular fingerprints.",
            "reproducibility": "Sorted paths, fixed file permissions and ZIP timestamps derived from generatedAt.",
        },
        "sha256": {name: sha256(content) for name, content in snapshot.items()},
    }
    manifest_bytes = (json.dumps(manifest, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    archive_content = {name: content for name, content in snapshot.items() if not name.lower().endswith(".mp4")}
    archive_content["build.json"] = manifest_bytes
    zip_time = (generated.year, generated.month, generated.day, generated.hour, generated.minute, generated.second // 2 * 2)
    zip_temp = manifest_temp = None
    try:
        with tempfile.NamedTemporaryFile(dir=ROOT, prefix=".release-", suffix=".zip", delete=False) as temporary:
            zip_temp = Path(temporary.name)
        with zipfile.ZipFile(zip_temp, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
            for name in sorted(archive_content):
                info = zipfile.ZipInfo(name, date_time=zip_time)
                info.create_system = 3
                info.external_attr = 0o100644 << 16
                info.compress_type = zipfile.ZIP_DEFLATED
                archive.writestr(info, archive_content[name], compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
        with zipfile.ZipFile(zip_temp) as archive:
            if archive.testzip() is not None:
                raise RuntimeError("Source archive failed its CRC check")
        with tempfile.NamedTemporaryFile(dir=ROOT, prefix=".manifest-", suffix=".json", delete=False) as temporary:
            manifest_temp = Path(temporary.name)
            temporary.write(manifest_bytes)
        os.replace(manifest_temp, ROOT / "build.json")
        os.replace(zip_temp, ROOT / "source-release.zip")
    finally:
        for temporary in (manifest_temp, zip_temp):
            if temporary and temporary.exists():
                temporary.unlink()
    print(json.dumps({
        "ok": True, "release": release, "counts": manifest["counts"],
        "companyMarks": len(logos["items"]), "initialsFallbacks": sorted(logos["missing"]),
        "archiveFiles": len(archive_content),
        "manifestSha256": sha256(manifest_bytes),
        "archiveSha256": sha256((ROOT / "source-release.zip").read_bytes()),
    }, indent=2))


if __name__ == "__main__":
    main()
