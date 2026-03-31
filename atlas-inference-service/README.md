# Atlas Unified PT Inference Service

This is a standalone FastAPI service created outside the original `VaidyaVision-PCU` app structure. It loads the original PyTorch checkpoints in place and exposes a single inference API with optional Grad-CAM output.

## Models discovered

- `best_BrainExpert.pth`: brain MRI classification, 4 classes
- `best_LungExpert.pth`: chest X-ray classification, 5 classes
- `best_SkinExpert.pth`: skin lesion classification, 9 classes
- `best_ECGExpert.pth`: ECG image classification, 4 classes
- `best_ModalityRouter.pth`: modality routing across `brain`, `lung`, `skin`, `ecg`

All five models are image classifiers. Existing repo training and inference code showed a shared preprocessing pipeline:

- RGB input
- resize to `224x224`
- `ToTensor()`
- ImageNet normalization with `mean=[0.485, 0.456, 0.406]` and `std=[0.229, 0.224, 0.225]`

## Run

```bash
cd atlas-inference-service
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8002 --reload
```

## Endpoints

- `GET /health`
- `GET /models`
- `POST /predict`

Example:

```bash
curl -X POST "http://127.0.0.1:8002/predict" \
  -F "model_name=clinical_system" \
  -F "mc_samples=5" \
  -F "image=@../VaidyaVision-PCU/test_scan.jpg"
```

You can also call a specific model directly with:

- `brain_expert`
- `lung_expert`
- `skin_expert`
- `ecg_expert`
- `modality_router`
- `clinical_system`
