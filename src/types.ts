export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  categoryType?: 'work' | 'organization';
  location: string;
  summary: string;
  highlights: string[];
  badges: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline?: string;
  period?: string;
  description?: string;
  url?: string;
  bullets?: string[];
  techStack?: string[];
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: 'Meta' | 'Google' | 'Dicoding Indonesia' | string;
  category: string;
  credentialId?: string;
  year: string;
  month?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: string; iconName?: string }[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

