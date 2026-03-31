from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from unified_medical_api.routes.ecg import router as ecg_router
from unified_medical_api.routes.health import router as health_router
from unified_medical_api.routes.reports import router as reports_router
from unified_medical_api.routes.scans import router as scans_router
from unified_medical_api.services.registry import registry

@asynccontextmanager
async def lifespan(_: FastAPI):
    registry.load()
    yield

app = FastAPI(
    title="Unified Medical AI API",
    version="1.0.0",
    description="Merged Atlas + DiagnoScope inference service with fallback routing.",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(scans_router, prefix="/api/v1")
app.include_router(ecg_router, prefix="/api/v1")
app.include_router(reports_router, prefix="/api/v1")

import os
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from unified_medical_api.config import PROJECT_ROOT

FRONTEND_DIST = PROJECT_ROOT / "frontend" / "dist"

if FRONTEND_DIST.exists() and FRONTEND_DIST.is_dir():
    app.mount("/assets", StaticFiles(directory=FRONTEND_DIST / "assets"), name="assets")
    
    @app.get("/{full_path:path}")
    async def serve_frontend(full_path: str):
        # Prevent shadowing API routes
        if full_path.startswith("api/") or full_path.startswith("docs") or full_path.startswith("openapi.json"):
            return None
            
        file_path = FRONTEND_DIST / full_path
        if file_path.exists() and file_path.is_file():
            return FileResponse(file_path)
        
        return FileResponse(FRONTEND_DIST / "index.html")
