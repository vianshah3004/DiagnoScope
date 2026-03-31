<div align="center">

# 🩺 DiagnoScope Core Online

### *Unified AI-Powered Multi-Modality Medical Diagnostic Platform*

[![License: MIT](https://img.shields.io/badge/License-MIT-00e5ff.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB.svg?logo=python&logoColor=white)](https://python.org)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg?logo=react&logoColor=black)](https://react.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688.svg?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.0+-EE4C2C.svg?logo=pytorch&logoColor=white)](https://pytorch.org)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28.svg?logo=firebase&logoColor=black)](https://firebase.google.com)

<br/>

> **A clinical-grade, explainable AI platform that acts as a reliable second-opinion layer for doctors, radiologists, and diagnostic labs — enabling real-time, confidence-scored diagnostics across 7+ medical modalities.**

<br/>

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Proposed Solution](#-proposed-solution)
- [Key Features](#-key-features)
- [Supported Diagnostic Modalities](#-supported-diagnostic-modalities)
- [Platform Screenshots](#-platform-screenshots)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [AI Models & Checkpoints](#-ai-models--checkpoints)
- [License](#-license)
- [Author](#-author)

---

## 🔭 Overview

**DiagnoScope Core Online** is a unified AI-powered diagnostic platform designed exclusively for **doctors, radiologists, and diagnostic labs**. It provides a single web-based interface to analyze multiple medical modalities in real time and act as a reliable **second point of clinical validation**.

The system allows doctors to **create a case**, **select the diagnostic type**, and **upload medical data** such as scans or ECG signal files. The platform intelligently routes the input to specialized AI models that generate fast, **confidence-scored results** with **visual explanations**. Doctors can review, validate, and export **structured PDF reports**, ensuring full control over final decisions.

The platform is built to integrate across **hospitals**, **radiology labs**, and **rural healthcare centers**, making advanced diagnostic support accessible while improving speed, accuracy, and clinical workflow efficiency.

---

## 🚀 Problem Statement

Modern healthcare systems are increasingly challenged by the growing volume and complexity of diagnostic data — including **MRIs, X-rays, ECG signals, retinal scans, and dermatoscopic images**. Medical professionals are required to interpret this data under strict time constraints while coordinating across multiple specialists such as radiologists, pathologists, and physicians. This leads to:

- **Diagnostic fatigue** and burnout among medical professionals
- **Delays in critical decision-making** for life-threatening conditions
- **Higher risk of human error** in high-stakes medical environments

At the same time, existing AI solutions fail to integrate effectively into real clinical workflows. Most tools are either research-focused or operate as **black-box systems without transparency**, making them difficult for doctors to trust or adopt.

### 🔍 Key Challenges

| Challenge | Description |
|---|---|
| **Clinical Workflow Gap** | Diagnosis requires coordination between multiple specialists across disconnected systems |
| **Data Overload & Time Pressure** | Large volumes of complex medical data must be analyzed quickly and accurately |
| **Limitations of Existing AI Tools** | Research-oriented, not clinically deployed; lack of integration into hospital workflows; black-box models with low explainability; no accountability or validation support |
| **Fragmented Diagnostic Systems** | Separate tools for different modalities lead to inefficient and time-consuming workflows |

### ⚠️ Core Problem

> *There is no unified, explainable, and clinically usable AI system that acts as a reliable second-opinion layer to assist doctors in real-time, enhance diagnostic confidence, and reduce the risk of errors in high-stakes medical environments.*

---

## 💡 Proposed Solution

DiagnoScope Core Online addresses these challenges by providing:

- **🔬 One Platform, All Modalities** — A single interface for X-Ray, MRI, ECG, Retinal, Dermatoscopic, and Lung scan analysis
- **🧠 Explainable AI** — Every prediction comes with GradCAM heatmaps, segmentation overlays, and confidence scores
- **👨‍⚕️ Doctor-in-the-Loop** — Physicians validate or reject AI results before any report is finalized
- **📄 Instant PDF Reports** — Structured, professional diagnostic reports generated with one click
- **⚡ Real-Time Processing** — Fast AI-powered inference for quicker clinical decision-making
- **🏥 Healthcare Network Ready** — Designed for hospitals, radiology labs, and rural diagnostic centers

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🔬 Multi-Modality Diagnostics
COVID-19 detection, Pneumonia screening, Brain tumor analysis, Retinal disease detection, Arm fracture detection, Skin lesion analysis, ECG analysis (scan + TXT signal)

### 🧠 Advanced Brain Tumor Analysis
Tumor segmentation, size estimation (pixel coverage), affected region visualization, and tumor classification (Meningioma, Glioma, Pituitary)

### ❤️ ECG Analysis Engine
Supports both ECG scan images and raw signal (TXT) data for cardiac condition detection with waveform visualization

### 🔍 Explainable AI
GradCAM heatmaps, segmentation overlays, retinal vessel mapping, and visual outputs for clinical transparency

</td>
<td width="50%">

### 📄 Automated Report Generation
Generate structured, doctor-validated PDF reports instantly with case details, AI predictions, and clinical recommendations

### 🏥 Unified Platform
Single system for multiple diagnostic modalities — no need for separate tools or disjointed workflows

### 🔒 Doctor-Only Access
Secure platform restricted to healthcare professionals with Firebase authentication

### 🔧 Advanced Analysis Tools
Image enhancement using **CLAHE**, **Retinex**, **Jet Colormap**, brightness adjustment, and zoom controls for detailed examination

</td>
</tr>
</table>

---

## 🧬 Supported Diagnostic Modalities

| Module | Modality | AI Model | Capabilities |
|---|---|---|---|
| **NeuroScan AI** | Brain MRI | EfficientNet-B3 | Tumor classification, GradCAM heatmaps, segmentation, size estimation, focused region extraction |
| **PulmoScan AI** | Chest X-Ray | DenseNet-121 | COVID-19, Pneumonia, Tuberculosis detection with confidence scoring |
| **CardiacScan AI** | ECG (Image + TXT) | ResNet-18 | Arrhythmia classification, waveform visualization, clinical meaning, risk assessment |
| **RetinaScan AI** | Fundus Images | EfficientNet-B3 | Diabetic retinopathy grading, vessel segmentation, lesion analysis, affected area calculation |
| **Fracture AI** | X-Ray | YOLOv8 + ResNet | Fracture detection with bounding box localization, CLAHE/Retinex enhancement, smart auto-detection |
| **DermScan AI** | Dermatoscopic | EfficientNet-B4 | Skin lesion classification (7 classes), melanoma risk assessment |

---

## 🖼️ Platform Screenshots

### 🏠 Homepage — AI Module Showcase

The landing page features an immersive, scroll-driven cinematic experience showcasing each diagnostic module with premium visual design.

<div align="center">

<table>
<tr>
<td align="center">
<b>NeuroScan AI — Brain Tumor Analysis</b><br>
<img src="https://github.com/user-attachments/assets/d58d4b0a-2f75-4d43-9d49-7ded8a705ec9" width="350"/>
</td>

<td align="center">
<b>RetinaScan AI — Retinopathy Analysis</b><br>
<img src="https://github.com/user-attachments/assets/ad1abfe3-17af-4f6c-ae9a-77fc78f4ecbe" width="350"/>
</td>
</tr>

<tr>
<td align="center">
<b>Fracture AI — Skeletal Analysis</b><br>
<img src="https://github.com/user-attachments/assets/f832a0a5-2ab3-4a47-94af-52e55e224f8f" width="350"/>
</td>

<td align="center">
<b>CardiacScan AI — ECG Analysis</b><br>
<img src="https://github.com/user-attachments/assets/6dd7ef16-b51d-4c1a-9781-54d2644c18f2" width="350"/>
</td>
</tr>

<tr>
<td align="center">
<b>PulmoScan AI — Lung Analysis</b><br>
<img src="https://github.com/user-attachments/assets/317049f3-542f-4069-ba04-c1fbe1c88603" width="350"/>
</td>

<td align="center">
<b>DermScan AI — Skin Lesion Analysis</b><br>
<img src="https://github.com/user-attachments/assets/6ec30a07-107c-4ed5-97ee-d9a5704711aa" width="350"/>
</td>
</tr>

</table>

</div>

---

### 📋 Case Creation & Detection Interface

Doctors create cases by selecting the diagnostic type, disease category, and uploading medical scans. The system supports drag-and-drop upload for PNG, JPG, and DICOM formats up to 50MB.

<div align="center">

![WhatsApp Image 2026-04-01 at 00 39 41](https://github.com/user-attachments/assets/8bf85f77-3b2e-4400-afbf-6bf615dfdb36)


</div>

---


### 🦴 Fracture Detection AI — Results

Standard analysis provides CNN-based fracture detection with confidence scores, severity ratings, and physician validation controls. The advanced analysis mode includes CLAHE, Brightness, Jet Colormap, and Retinex image enhancement filters.

<div align="center">

<b>Standard Analysis</b><br>
<img src="https://github.com/user-attachments/assets/7b026a81-363a-4343-a642-7fdc51ce1668" width="70%"><br><br>

<b>Smart Auto-Detection (YOLO)</b><br>
<img src="https://github.com/user-attachments/assets/9d3ee13e-be7d-47d9-b073-dcb571376227" width="70%"><br><br>

</div>

---

### 🧠 Brain Tumor Analysis — NeuroScan AI Results

Deep analysis provides tumor segmentation overlays, AI heatmaps for attention visualization, and focused region extraction. Standard analysis shows GradCAM overlays with tumor classification and confidence scores.

<div align="center">

<b>Standard Analysis — GradCAM</b><br>
<img src="https://github.com/user-attachments/assets/5ef1fd9b-6497-4a8b-94e7-71ae6df17083" width="70%"><br><br>

<b>Deep Analysis — Segmentation + Heatmap</b><br>
<img src="https://github.com/user-attachments/assets/ab7a7c4f-bc19-4886-9745-ae001afb8b3c" width="70%"><br><br>

</div>

### 👁️ Retinopathy Analysis — RetinaScan AI Results

Retinal analysis includes vessel segmentation, lesion mapping, diabetic retinopathy grading, affected area calculation, and clinical insight generation with urgency indicators.

<div align="center">

<img width="1600" height="1171" alt="image" src="https://github.com/user-attachments/assets/34e6d46e-4a44-457b-8821-c1f0f9857c65" />


</div>

---

###  ECG Analysis — CardiacScan AI Results

ECG analysis supports both image-based and raw signal (TXT) input. Results include waveform visualization (amplitude vs time), diagnosis classification, clinical risk level, and AI confidence scoring with clinical meaning and recommendations.

<div align="center">

<img width="1600" height="1362" alt="image" src="https://github.com/user-attachments/assets/453bef18-7d27-4d0d-bd1c-4ecdc4c9d63b" />


</div>

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        DiagnoScope Core Online                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                     FRONTEND (React + Vite)                      │   │
│  │                                                                  │   │
│  │  ┌──────────┐ ┌───────────┐ ┌──────────┐ ┌──────────────────┐   │   │
│  │  │   Home   │ │ Dashboard │ │  Detect  │ │    Results +     │   │   │
│  │  │  (Hero)  │ │  (Cases)  │ │ (Upload) │ │  Report Export   │   │   │
│  │  └──────────┘ └───────────┘ └──────────┘ └──────────────────┘   │   │
│  │                                                                  │   │
│  │  Framer Motion │ Recharts │ Html2Canvas │ Light/Dark Themes     │   │
│  └──────────────────────────────┬───────────────────────────────────┘   │
│                                 │ REST API                              │
│  ┌──────────────────────────────▼───────────────────────────────────┐   │
│  │              BACKEND — Unified Medical API (FastAPI)             │   │
│  │                                                                  │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │   │
│  │  │   Routes     │  │   Services   │  │   Report Generator   │   │   │
│  │  │  /analyze    │  │  Proxy to    │  │   PDF Export Engine  │   │   │
│  │  │  /report     │  │  Inference   │  │                      │   │   │
│  │  └──────────────┘  └──────────────┘  └──────────────────────┘   │   │
│  └──────────────────────────────┬───────────────────────────────────┘   │
│                                 │ Internal API                          │
│  ┌──────────────────────────────▼───────────────────────────────────┐   │
│  │           AI ENGINE (FastAPI)                                    │   │
│  │                                                                  │   │
│  │  ┌────────────────┐  ┌──────────────┐  ┌────────────────────┐   │   │
│  │  │ Model Registry │  │   GradCAM    │  │  Unified Checkpoint│   │   │
│  │  │  (Catalog)     │  │   Engine     │  │   Architecture     │   │   │
│  │  └────────────────┘  └──────────────┘  └────────────────────┘   │   │
│  │                                                                  │   │
│  │  Models: ResNet │ EfficientNet │ DenseNet │ YOLO │ Custom CNNs  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                   FIREBASE (Firestore + Auth)                    │   │
│  │                                                                  │   │
│  │  User Authentication │ Case Management │ Cloud Sync              │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Data Flow

```
Doctor creates case ──▶ Selects modality ──▶ Uploads scan/signal
                                                      │
                                                      ▼
                                              Unified Medical API
                                                      │
                                    ┌─────────────────┼─────────────────┐
                                    ▼                 ▼                 ▼
                              NeuroScan         PulmoScan         CardiacScan
                              RetinaScan        FractureAI        DermScan
                                    │                 │                 │
                                    └─────────────────┼─────────────────┘
                                                      ▼
                                          AI Results + Heatmaps
                                                      │
                                                      ▼
                                        Doctor reviews & validates
                                                      │
                                                      ▼
                                           PDF Report Generated
```

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| **React.js 18** | Component-based UI framework |
| **Vite** | Lightning-fast build tool and dev server |
| **Framer Motion** | Premium animations and page transitions |
| **Lucide React** | Clean, consistent UI iconography |
| **Recharts** | ECG waveform visualization |
| **Html2Canvas** | Client-side report rendering |
| **Custom CSS** | Light/Dark clinical themes with glassmorphism |

### Backend

| Technology | Purpose |
|---|---|
| **Python 3.10+** | Core backend language |
| **FastAPI** | High-performance async web framework |
| **Uvicorn** | ASGI server for production deployment |
| **Microservices** | Independent diagnostic module handling |

### AI / Machine Learning

| Technology | Purpose |
|---|---|
| **PyTorch 2.0+** | Deep learning framework |
| **ResNet-18** | ECG classification |
| **EfficientNet-B3/B4** | Brain tumor, retinopathy, skin lesion classification |
| **DenseNet-121** | Lung scan classification |
| **YOLOv8** | Real-time fracture object detection |
| **GradCAM** | Explainable AI attention heatmaps |
| **Unified Checkpoints** | Multi-modality inference with single architecture |

### Database & Cloud

| Technology | Purpose |
|---|---|
| **Firebase Firestore** | Real-time data storage and case management |
| **Firebase Auth** | Secure doctor-only authentication |
| **Cloud Sync** | Cross-device case synchronization |

### Image Processing

| Technology | Purpose |
|---|---|
| **CLAHE** | Contrast-limited adaptive histogram equalization |
| **Retinex** | Multi-scale retinex for image enhancement |
| **OpenCV** | Medical image preprocessing and segmentation |
| **Jet Colormap** | Thermal visualization of medical scans |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License · Copyright (c) 2026 Vian Shah
```

---

## 👨‍💻 Author

**Vian Shah**
**Pearl Mehta**
**Vrusha**
**Aryan**

---

<div align="center">

<br/>

*Built with ❤️ for advancing healthcare through explainable AI*

**DiagnoScope Core Online** — *Where AI meets clinical precision.*

<br/>

</div>
