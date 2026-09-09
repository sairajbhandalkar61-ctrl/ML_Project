import { SkillItem } from '../types/portfolio';

export interface ResumeSkillCategory {
  title: string;
  skills: string[];
}

export const resumeSkillCategories: ResumeSkillCategory[] = [
  {
    title: "PROGRAMMING",
    skills: ["Python", "SQL", "HTML", "CSS"]
  },
  {
    title: "ML & AI ARCHITECTURES",
    skills: ["Regression", "Classification", "Clustering", "ANN", "CNN", "NLP", "TF-IDF", "Feature Engineering", "Model Evaluation"]
  },
  {
    title: "LIBRARIES & FRAMEWORKS",
    skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "Flask", "Streamlit", "Pandas", "NumPy"]
  },
  {
    title: "TOOLS & ENVIRONMENTS",
    skills: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "MySQL"]
  },
  {
    title: "DATA ANALYTICS",
    skills: ["Data Cleaning", "Data Preprocessing", "EDA (Exploratory Data Analysis)", "Data Visualization", "Power BI"]
  },
  {
    title: "CORE COMPETENCIES",
    skills: ["Problem Solving", "Machine Learning Development", "Data Analysis", "Feature Engineering", "NLP", "Computer Vision", "Backend Development", "Team Collaboration"]
  }
];

export const editorialSkills: SkillItem[] = [
  {
    name: "PYTHON",
    category: "CORE LANGUAGE",
    description: "Object-oriented scripting, algorithmic computation, and production AI application development.",
    tools: ["Python 3.x", "Data Structures", "AsyncIO", "Automation"]
  },
  {
    name: "MACHINE LEARNING",
    category: "PREDICTIVE MODELING",
    description: "Supervised and unsupervised architectures, regression, classification, clustering, cross-validation, and model evaluation.",
    tools: ["Regression", "Classification", "Clustering", "Feature Engineering"]
  },
  {
    name: "DEEP LEARNING & NEURAL NETS",
    category: "DEEP ARCHITECTURES",
    description: "Multi-layer perceptrons, Convolutional Neural Networks (CNNs), Artificial Neural Networks (ANNs), and transfer learning.",
    tools: ["TensorFlow", "Keras", "PyTorch", "CNN / ANN"]
  },
  {
    name: "COMPUTER VISION",
    category: "IMAGE INTELLIGENCE",
    description: "Spatial filtering, edge detection, automated activity detection, and medical/dermatological image processing.",
    tools: ["OpenCV", "Activity Detection", "Morphology", "Image Preprocessing"]
  },
  {
    name: "NLP & TEXT ANALYTICS",
    category: "LANGUAGE PROCESSING",
    description: "Intent classification, TF-IDF vectorization, tokenization, and query resolution chatbots.",
    tools: ["TF-IDF", "Intent Classification", "NLTK", "Text Cleaning"]
  },
  {
    name: "SCIKIT-LEARN",
    category: "ML TOOLKIT",
    description: "Production ML pipelines, feature scaling, grid search cross-validation, and metrics evaluation.",
    tools: ["Scikit-learn", "PCA", "K-Means", "Random Forest"]
  },
  {
    name: "FLASK & STREAMLIT",
    category: "AI DEPLOYMENT",
    description: "Rapid prototyping, interactive model deployment interfaces, and lightweight REST microservices.",
    tools: ["Flask REST APIs", "Streamlit Apps", "Scalable Interfaces"]
  },
  {
    name: "DATA ANALYTICS & EDA",
    category: "ANALYTICS ENGINE",
    description: "Data cleaning, preprocessing, exploratory data analysis, and business visualization dashboards.",
    tools: ["Data Cleaning", "Preprocessing", "EDA", "Data Visualization"]
  },
  {
    name: "SQL & DATABASES",
    category: "DATA RELATIONS",
    description: "Relational database queries, table joins, analytical filtering, and schema modeling.",
    tools: ["MySQL", "SQL Queries", "Relational Joins", "Data Extraction"]
  },
  {
    name: "PANDAS & NUMPY",
    category: "VECTOR COMPUTATION",
    description: "High-performance dataframe manipulation, vectorized operations, and statistical aggregation.",
    tools: ["Vectorized Math", "Data Wrangling", "Matrix Computing", "DataFrames"]
  },
  {
    name: "TOOLS & VERSION CONTROL",
    category: "DEVELOPER TOOLING",
    description: "Collaborative Git/GitHub workflows, Jupyter Notebooks, Google Colab, and VS Code environments.",
    tools: ["Git", "GitHub", "Jupyter", "Google Colab", "VS Code"]
  },
  {
    name: "POWER BI",
    category: "BUSINESS INTELLIGENCE",
    description: "Interactive data visualization reports, DAX calculations, and KPI tracking.",
    tools: ["Power BI", "DAX", "Executive Reports", "Visual Analytics"]
  }
];
