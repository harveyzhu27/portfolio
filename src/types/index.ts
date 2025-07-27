export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  videoUrl?: string;
  imageUrl?: string;
  technologies: string[];
  emoji?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  id: string;
  category: string;
  icon: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  date: string;
}

export interface Contact {
  email: string;
  location: string;
  github: string;
  linkedin: string;
  resume: string;
} 