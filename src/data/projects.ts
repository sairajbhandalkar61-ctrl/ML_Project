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
    id: "ai-monitoring",
    number: "PROJECT 02",
    title: "AI MONITORING",
    subtitle: "REAL-TIME TELEMETRY • ANOMALY DETECTION • PREDICTIVE ALERTING",
    category: "SYSTEMS INTELLIGENCE // STREAMING TELEMETRY",
    discipline: "MACHINE LEARNING / TIME-SERIES / TELEMETRY",
    description: "Automated telemetry ingestion engine with rolling threshold anomaly detection and automated incident dispatching.",
    overview: "An enterprise AI telemetry system designed to monitor distributed application infrastructure. Ingests high-frequency system telemetry, calculates dynamic variance envelopes, and forecasts potential service degradations minutes before threshold breach occurs.",
    problem: "Static metric thresholds in production infrastructure generate fatigue through constant false alarms during peak traffic while failing to detect subtle, compounding multi-variable anomalies.",
    solution: "Engineered an unsupervised anomaly scoring pipeline utilizing rolling multivariate statistical windows, dynamic z-score calibration, and automated Slack/webhook incident dispatch.",
    architecture: {
      title: "Streaming Telemetry Pipeline",
      description: "Continuous observation and preemptive mitigation:",
      steps: [
        "Telemetry Ingestion via WebSocket and REST stream workers.",
        "Rolling Time-Window Feature Buffer (CPU, memory, IOPS, latency).",
        "Multivariate Z-Score and Isolation Forest anomaly computation.",
        "Dynamic Thresholding adjusting automatically for diurnal traffic curves.",
        "Automated Alerting and root-cause metric correlation."
      ]
    },
    keyFeatures: [
      "High-Throughput Metric Ingestion Engine",
      "Dynamic Multi-Horizon Threshold Adaptation",
      "Automated Incident Classification & Root-Cause Attribution",
      "Interactive Real-Time Monitoring Dashboard"
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Flask",
      "WebSocket",
      "Matplotlib"
    ],
    metrics: [
      { label: "Telemetry Latency", value: "< 50ms" },
      { label: "False Positive Cut", value: "-64%" },
      { label: "Detection Horizon", value: "Pre-Breach" },
      { label: "Architecture", value: "Microservices" }
    ],
    githubUrl: "https://github.com/sairajbhandalkar61-ctrl",
    liveDemoUrl: "https://github.com/sairajbhandalkar61-ctrl",
    featuredImage: "/assets/projects/skinnova-logo.png",
    tags: ["Anomaly Detection", "Time Series", "Telemetry", "Infrastructure"]
  },
  {
    id: "customer-segmentation",
    number: "PROJECT 03",
    title: "SEGMENTATION AI",
    subtitle: "UNSUPERVISED MACHINE LEARNING • K-MEANS • BEHAVIORAL RFM",
    category: "DATA SCIENCE // PREDICTIVE ANALYTICS",
    discipline: "UNSUPERVISED ML / RFM MODELING / PCA",
    description: "Multi-cluster RFM feature engineering and predictive customer lifetime modeling using Scikit-learn and PCA projection.",
    overview: "End-to-end customer intelligence framework analyzing tens of thousands of e-commerce transactions. Converts unstructured purchasing history into actionable behavioral archetypes via Recency, Frequency, and Monetary (RFM) modeling, followed by high-dimensional K-Means clustering and PCA visualization.",
    problem: "Broad, generic marketing campaigns fail because customers exhibit disparate purchasing patterns, churn risks, and brand affinities that cannot be captured by one-size-fits-all logic.",
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
    liveDemoUrl: "https://github.com/sairajbhandalkar61-ctrl",
    featuredImage: "/assets/projects/skinnova-logo.png",
    tags: ["K-Means", "RFM Analysis", "PCA", "Customer Analytics"]
  },
  {
    id: "executive-analytics",
    number: "PROJECT 04",
    title: "DATA INTELLIGENCE",
    subtitle: "BUSINESS INTELLIGENCE • POWER BI • OPERATIONAL KPI DASHBOARDS",
    category: "BUSINESS INTELLIGENCE // ANALYTICS",
    discipline: "POWER BI / ADVANCED SQL / EDA",
    description: "Interactive executive analytics suite translating multi-dimensional raw business telemetry into strategic operational KPIs.",
    overview: "A comprehensive business intelligence solution deployed to transform fragmented organizational records into real-time decision-support consoles. Features complex DAX measures, automated ETL pipelines, and multi-tier filtering across geographic and product hierarchies.",
    problem: "Leadership teams were hampered by disjointed spreadsheets, delayed reporting intervals, and lack of drill-through visibility into regional sales velocities and inventory bottlenecks.",
    solution: "Engineered automated SQL data transformation views and modeled a robust Star Schema in Power BI. Authored specialized DAX measures for Year-over-Year growth, customer retention rates, and real-time inventory burn rates.",
    architecture: {
      title: "Enterprise BI Lifecycle",
      description: "From disparate data sources to executive clarity:",
      steps: [
        "Data Extraction & Harmonization across heterogeneous sources.",
        "Exploratory Data Analysis (EDA) and data cleansing in Python & SQL.",
        "Star Schema Data Modeling (Fact & Dimension Tables).",
        "Advanced DAX Measures (Time Intelligence, Moving Averages).",
        "Executive Dashboard Composition with drill-down interactivity."
      ]
    },
    keyFeatures: [
      "Star Schema Dimensional Data Modeling",
      "Complex DAX Calculations & Moving Averages",
      "Drill-Down Geographic & Product Hierarchies",
      "Automated Scheduled Data Refresh Workflows"
    ],
    technologies: [
      "Power BI",
      "SQL",
      "Python",
      "Pandas",
      "DAX",
      "Data Modeling"
    ],
    metrics: [
      { label: "Reporting Velocity", value: "Real-Time" },
      { label: "Data Compression", value: "85% Star Schema" },
      { label: "DAX Measures", value: "40+ Custom KPIs" },
      { label: "Adoption", value: "Executive Tier" }
    ],
    githubUrl: "https://github.com/sairajbhandalkar61-ctrl",
    liveDemoUrl: "https://github.com/sairajbhandalkar61-ctrl",
    featuredImage: "/assets/projects/skinnova-logo.png",
    tags: ["Power BI", "SQL", "Data Modeling", "Business Intelligence"]
  }
];
