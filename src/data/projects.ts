import { Project } from '../types/portfolio';
import skinnovaLogo from '../assets/projects/skinnova-logo.png';

export const projects: Project[] = [
  {
    id: "skinnova",
    number: "PROJECT 01",
    title: "SKINNOVA",
    subtitle: "AI / MACHINE LEARNING • COMPUTER VISION • HEALTH TECHNOLOGY",
    category: "HEALTHCARE AI // COMPUTER VISION",
    discipline: "AI / COMPUTER VISION / HEALTH TECHNOLOGY",
    description: "An AI-powered platform for image-based skin condition analysis, longitudinal monitoring, and intelligent clinical assistance.",
    overview: "Existing dermatology apps analyze an isolated snapshot; SKINNOVA analyzes the journey. Built on rigorous algorithmic foundations and benchmarked against diverse skin-tone datasets (including Google Research SCIN, Stanford DDI, and Fitzpatrick17k), SKINNOVA tracks skin transformations longitudinally, detects subtle erythema and texture deviations, and generates doctor-ready evidence packages.",
    problem: "Most digital dermatology tools suffer from high false-alarm rates, vulnerability to poor user capture conditions (bad lighting, blur, angle distortion), and significant dataset bias across diverse Fitzpatrick skin types.",
    solution: "SKINNOVA implements a multi-stage zero-trust AI pipeline: Smart Scan checks quality before inference; the Skin Digital Twin tracks temporal progression; the 'Why Engine' cross-references skincare routine changes with detected alterations; and the Doctor Evidence Pack structures metrics for clinical consultation.",
    architecture: {
      title: "6-Stage Longitudinal AI Pipeline",
      description: "From pixel intake to clinical evidence generation:",
      steps: [
        "Smart Scan & AI Trust Check: Validates lighting, focus, and capture angle; rejects uncalibrated frames.",
        "Skin Digital Twin: Preserves longitudinal baselines and measures pixel-level temporal drift.",
        "Computer Vision Change Detection: Quantifies erythema redness, surface texture, and lesion margins.",
        "The Why Engine: Correlates user skincare routine alterations and symptom logs with detected skin changes.",
        "Skin Lab: Provides controlled, structured observation periods when introducing new formulations.",
        "Doctor Evidence Pack: Synthesizes high-resolution visual history into a structured clinical report."
      ]
    },
    keyFeatures: [
      "Zero-Trust Image Quality Engine (Abstention on low-confidence captures)",
      "Fitzpatrick I-VI Subgroup Calibration based on Stanford DDI & SCIN research",
      "Temporal Change Detection & Redness Elevation Index",
      "Causal Timeline Linking Skincare Products to Skin Reactions",
      "Doctor-Grade PDF/Evidence Pack Export for Dermatological Review"
    ],
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "FastAPI",
      "React",
      "Google SCIN Dataset",
      "DDI Benchmark"
    ],
    metrics: [
      { label: "Skin-Tone Benchmark", value: "Fitzpatrick I–VI" },
      { label: "Quality Abstention", value: "100% Zero-Trust" },
      { label: "Longitudinal Tracking", value: "Daily/Weekly Drift" },
      { label: "Target Domain", value: "Clinical HealthTech" }
    ],
    githubUrl: "https://github.com/sairajbhandalkar61-ctrl/ML_Project",
    liveDemoUrl: "https://sairajbhandalkar61-ctrl.github.io/ML_Project/",
    featuredImage: skinnovaLogo,
    accentColor: "#E85D36",
    tags: ["Computer Vision", "Healthcare AI", "Longitudinal Tracking", "Deep Learning"]
  },
  {
    id: "smart-monitoring",
    number: "PROJECT 02",
    title: "SMART AI REAL-TIME MONITORING SYSTEM",
    subtitle: "OPENCV • DEEP LEARNING • ACTIVITY DETECTION • ALERT GENERATION",
    category: "COMPUTER VISION // DEEP LEARNING",
    discipline: "COMPUTER VISION / DEEP LEARNING / INFERENCE OPTIMIZATION",
    description: "Built a real-time monitoring system using OpenCV and deep learning models for automated activity detection. Implemented alert generation and optimized inference performance for scalable monitoring applications.",
    overview: "High-performance computer vision pipeline engineered for low-latency activity detection and automated surveillance alerting. Integrates deep neural networks with OpenCV spatial frame processing to track dynamic event anomalies with sub-second incident dispatch.",
    problem: "Conventional video monitoring systems rely on continuous human observation or uncalibrated motion triggers that cause alert fatigue through hundreds of false alarms per hour.",
    solution: "Designed an end-to-end deep learning pipeline combining OpenCV background substraction, bounding box tracking, and optimized convolutional inference with automated alert dispatching.",
    architecture: {
      title: "Real-Time Vision Inference Pipeline",
      description: "Continuous frame intake, feature extraction, and alert dispatch:",
      steps: [
        "Frame Capture & Resolution Normalization via OpenCV video capture streams.",
        "Spatial Feature Extraction & Motion Vector Bounding Box Generation.",
        "Deep Learning Classification for Human Activity & Event Recognition.",
        "Confidence Threshold Filtering & False Alarm Suppression.",
        "Automated Real-Time Alert Generation & Notification Dispatch."
      ]
    },
    keyFeatures: [
      "Real-Time Activity Recognition via Deep Learning Models",
      "Optimized OpenCV Video Pipeline with Zero Frame Dropping",
      "Automated Alert Generation & Incident Flagging",
      "Scalable Inference Architecture for Multi-Stream Monitoring"
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn"
    ],
    metrics: [
      { label: "Inference Latency", value: "< 35ms / Frame" },
      { label: "Stream Handling", value: "Real-Time 30+ FPS" },
      { label: "Alert Dispatch", value: "Sub-Second" },
      { label: "Domain", value: "Automated Vision" }
    ],
    githubUrl: "https://github.com/sairajbhandalkar61-ctrl",
    liveDemoUrl: "https://sairajbhandalkar61-ctrl.github.io/ML_Project/",
    featuredImage: skinnovaLogo,
    accentColor: "#E85D36",
    tags: ["OpenCV", "Deep Learning", "Activity Detection", "Python"]
  },
  {
    id: "college-chatbot",
    number: "PROJECT 03",
    title: "AI-POWERED COLLEGE ASSISTANT CHATBOT",
    subtitle: "PYTHON • FLASK • SCIKIT-LEARN • TF-IDF • INTENT CLASSIFICATION",
    category: "NATURAL LANGUAGE PROCESSING // WEB AI",
    discipline: "NLP / TF-IDF / INTENT RECOGNITION / FLASK",
    description: "Developed an NLP-based chatbot using TF-IDF vectorization and intent classification for automated student query resolution. Integrated the model with Flask to provide accurate real-time responses through a scalable web interface.",
    overview: "Intelligent NLP conversational assistant designed to automate student administration, syllabus lookup, fee inquiries, and academic workflows. Utilizes term frequency-inverse document frequency (TF-IDF) feature spaces and probabilistic intent classification to deliver instant answers 24/7.",
    problem: "Academic administrative offices spend thousands of hours answering repetitive student inquiries regarding admissions, schedules, examinations, and departmental protocols.",
    solution: "Trained a tailored NLP classifier mapping student natural language inquiries to structured intent clusters, deployed through a responsive Flask web application for instantaneous automated resolution.",
    architecture: {
      title: "NLP Query Resolution Architecture",
      description: "From natural language input to verified academic response:",
      steps: [
        "Text Preprocessing: Lowercasing, tokenization, stopword removal, and lemmatization.",
        "Feature Representation: TF-IDF matrix vectorization over curated academic corpora.",
        "Intent Classification: Multi-class Scikit-learn predictive classifier.",
        "Confidence Evaluation: Fallback handoff if query ambiguity exceeds threshold.",
        "Flask Web API: Lightweight REST endpoint serving instant JSON responses to UI."
      ]
    },
    keyFeatures: [
      "TF-IDF Vectorization & High-Precision Intent Matching",
      "Scalable Flask Web Interface for Real-Time Query Handling",
      "Automated Fallback Handling for Unambiguous Query Resolution",
      "Modular Knowledge Base Extensible for New Academic Departments"
    ],
    technologies: [
      "Python",
      "Flask",
      "Scikit-learn",
      "TF-IDF",
      "NLP",
      "HTML/CSS"
    ],
    metrics: [
      { label: "Intent Accuracy", value: "94.2%" },
      { label: "Query Response", value: "< 80ms" },
      { label: "Deployment", value: "Flask Microservice" },
      { label: "Domain", value: "Academic NLP" }
    ],
    githubUrl: "https://github.com/sairajbhandalkar61-ctrl",
    liveDemoUrl: "https://sairajbhandalkar61-ctrl.github.io/ML_Project/",
    featuredImage: skinnovaLogo,
    accentColor: "#E85D36",
    tags: ["NLP", "TF-IDF", "Flask", "Scikit-learn", "Chatbot"]
  },
  {
    id: "customer-segmentation",
    number: "PROJECT 04",
    title: "PREDICTIVE CUSTOMER SEGMENTATION",
    subtitle: "UNSUPERVISED MACHINE LEARNING • K-MEANS • BEHAVIORAL RFM",
    category: "DATA SCIENCE // PREDICTIVE ANALYTICS",
    discipline: "UNSUPERVISED ML / RFM MODELING / PCA",
    description: "Multi-cluster RFM feature engineering and predictive customer lifetime modeling using Scikit-learn and PCA projection.",
    overview: "End-to-end customer intelligence framework analyzing tens of thousands of transactional logs. Converts unstructured purchasing history into actionable behavioral archetypes via Recency, Frequency, and Monetary (RFM) modeling, followed by high-dimensional K-Means clustering and PCA visualization.",
    problem: "Broad marketing campaigns fail because customers exhibit disparate purchasing patterns, churn risks, and brand affinities that cannot be captured by one-size-fits-all logic.",
    solution: "Extracted transactional features into normalized RFM vectors. Applied the Elbow Method and Silhouette Scoring to pinpoint optimal cluster density (k=4), revealing high-value champions, potential loyalists, at-risk churners, and dormant accounts.",
    architecture: {
      title: "Unsupervised Behavioral Pipeline",
      description: "From transactional logs to customer archetype clusters:",
      steps: [
        "Transactional Data Cleaning & Outlier Truncation.",
        "Recency, Frequency & Monetary (RFM) Metric Calculation.",
        "Log Transformation and StandardScaler normalization.",
        "PCA Dimensionality Reduction for orthogonal variance capture.",
        "K-Means clustering validated by Silhouette Coefficient (0.68).",
        "Strategic Segment Profiling and Churn Vulnerability Indexing."
      ]
    },
    keyFeatures: [
      "Automated RFM Feature Synthesis Pipeline",
      "PCA 2D/3D Orthogonal Cluster Projection",
      "Silhouette Score & Elbow Method Optimization",
      "Actionable Retention Strategy Generator for Marketing Teams"
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Matplotlib",
      "Statistics"
    ],
    metrics: [
      { label: "Optimal Clusters", value: "k = 4 Segments" },
      { label: "Silhouette Score", value: "0.68" },
      { label: "Dimension Reduction", value: "PCA 2-Component" },
      { label: "Data Scope", value: "Transactional" }
    ],
    githubUrl: "https://github.com/sairajbhandalkar61-ctrl",
    liveDemoUrl: "https://sairajbhandalkar61-ctrl.github.io/ML_Project/",
    featuredImage: skinnovaLogo,
    accentColor: "#E85D36",
    tags: ["K-Means", "RFM Analysis", "PCA", "Customer Analytics"]
  }
];
