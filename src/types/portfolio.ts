export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  discipline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    title: string;
    description: string;
    steps: string[];
  };
  keyFeatures: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featuredImage: string;
  accentColor?: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  description: string;
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  technologies: string[];
  deliverables: string[];
}

export interface EducationItem {
  id: string;
  number: string;
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  location: string;
  status: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}
