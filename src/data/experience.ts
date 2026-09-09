import { ExperienceItem } from '../types/portfolio';

export const experiences: ExperienceItem[] = [
  {
    id: "sevenmentor",
    number: "01",
    role: "DATA SCIENCE",
    company: "SEVENMENTOR PVT LTD",
    period: "JULY 2025 — JUNE 2026",
    location: "PUNE DISTRICT, MAHARASHTRA",
    type: "Intensive 1-Year Program",
    description: "Successfully completed an intensive Data Science program covering Python, SQL, Statistics, Machine Learning, Data Analysis, and Data Visualization. Worked on real-world datasets involving data cleaning, preprocessing, exploratory data analysis (EDA), and feature engineering. Built machine learning models using Scikit-learn and Python for predictive analytics and business insights.",
    technologies: [
      "Python",
      "SQL",
      "Statistics",
      "Machine Learning",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "EDA",
      "Feature Engineering"
    ],
    deliverables: [
      "Customer Segmentation: Built unsupervised K-Means and RFM clustering models on transactional data.",
      "AI Monitoring Systems: Developed automated threshold tracking and anomaly detection algorithms.",
      "Data Analytics Dashboards: Engineered Power BI business intelligence dashboards with automated DAX metrics.",
      "End-to-end lifecycle collaboration from data ingestion to model deployment and evaluation."
    ]
  },
  {
    id: "bluestock",
    number: "02",
    role: "SOFTWARE DEVELOPMENT ENGINEER INTERN",
    company: "BLUESTOCK™",
    period: "FEBRUARY 2026 — MARCH 2026",
    location: "PUNE CITY, MAHARASHTRA",
    type: "Internship (2 Months)",
    description: "Engineered scalable software modules, integrated backend data services, and collaborated across agile engineering sprints to build robust software systems and data endpoints.",
    technologies: [
      "Python",
      "Data Engineering",
      "REST APIs",
      "Git Workflow",
      "Agile Architecture"
    ],
    deliverables: [
      "Collaborated on production-grade software development pipelines.",
      "Implemented modular services with thorough test coverage and automated linting.",
      "Optimized data querying pipelines for improved backend throughput."
    ]
  }
];
