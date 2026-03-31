from __future__ import annotations

from pathlib import Path

PACKAGE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = PACKAGE_DIR.parent
ATLAS_DIR = PACKAGE_DIR / "engines" / "atlas"
DIAGNO_BACKEND_DIR = PACKAGE_DIR / "engines" / "diagno"
REPORT_OUTPUT_DIR = PROJECT_ROOT / "generated_reports"

REPORT_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
