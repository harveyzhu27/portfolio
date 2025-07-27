import { Project, Experience, Skill, Education, Contact } from '../types';

export const projects: Project[] = [
  {
    id: 'camel-caravan',
    title: 'Camel Caravan',
    description: 'A console-based strategy game inspired by Slay the Spire. You play as a caravan of camels trekking across the desert, battling enemies and collecting cards as you go. The game combines procedural generation with turn-based mechanics, all built in a functional programming environment.',
    githubUrl: 'https://github.com/harveyzhu27/camel_caravan',
    videoUrl: '/assets/camel-caravan-clip.mp4',
    technologies: ['OCaml', 'Functional Programming', 'Console Game', 'Strategy']
  },
  {
    id: 'gilded-flame',
    title: 'Gilded Flame',
    description: 'A 2D puzzle-platformer where players carry a single flame through a dark world. The gameplay revolves around light and darkness—illuminating paths, triggering shadow-based mechanics, and solving puzzles to advance through each level. The project was featured at Cornell\'s Spring Game Showcase.',
    githubUrl: 'https://github.com/harveyzhu27/Gilded-Flame',
    videoUrl: '/assets/gilded-flame-trailer.mp4',
    technologies: ['Java', 'LibGDX', 'Box2D', 'Game Development', '2D Platformer']
  },
  {
    id: 'ai-customer-service',
    title: 'AI Customer Service Bot',
    description: 'AI-powered customer support system with web scraping, RAG for accurate responses, and voice/text chat via VAPI.ai. Built with Next.js, Python, OpenAI API, and Pinecone vector database.',
    githubUrl: 'https://github.com/harveyzhu27/ai-customer-support',
    videoUrl: '/assets/ai-voice-assistant-clip.mp4',
    technologies: ['Next.js', 'Python', 'OpenAI API', 'VAPI.ai', 'Pinecone', 'RAG', 'Tailwind CSS']
  },
  {
    id: 'tako',
    title: 'TAKO',
    description: 'A productivity tool designed to help users manage and break down complex tasks. TAKO doesn\'t just track work—it encourages focus, builds momentum, and helps users make progress toward long-term goals by offering structured task planning and insight into daily habits.',
    githubUrl: 'https://github.com/harveyzhu27/TAKO',
    technologies: ['React', 'Firebase', 'JavaScript', 'Productivity Tool', 'Task Management']
  }
];

export const experiences: Experience[] = [
  {
    id: 'teidore',
    title: 'Full Stack Software Engineer Intern',
    company: 'Teidore',
    date: 'Jun 2025 – Present',
    description: 'Developed AI-powered automation systems using OpenAI APIs, Ollama, and BERT for product tagging and schema mapping. Built ETL pipelines with Selenium and Beautiful Soup for large-scale e-commerce data processing and optimized Supabase SQL queries for improved search performance. Implemented LLM/NLP solutions and led UX improvements and backend architecture enhancements.',
    technologies: ['OpenAI API', 'Ollama', 'BERT', 'Selenium', 'Beautiful Soup', 'ETL', 'Supabase', 'LLM/NLP']
  },
  {
    id: 'gilded-flame-lead',
    title: 'Project Lead – Gilded Flame',
    company: 'Cornell University',
    date: 'Cornell University',
    description: 'Coordinated a 9-person team throughout development, milestone planning, and final showcase presentation. Successfully led the project to completion and presentation at Cornell\'s Spring Game Showcase.',
    technologies: ['Project Leadership', 'Team Coordination', 'Game Development', 'Java', 'LibGDX']
  }
];

export const skills: Skill[] = [
  {
    id: 'programming-languages',
    category: 'Programming Languages',
    icon: '💻',
    technologies: ['Java', 'JavaScript/TypeScript', 'Python', 'SQL', 'OCaml', 'HTML/CSS']
  },
  {
    id: 'tools-frameworks',
    category: 'Tools & Frameworks',
    icon: '🛠️',
    technologies: ['React', 'Next.js', 'Flask', 'Firebase', 'LibGDX', 'Box2D', 'Docker', 'Git', 'Supabase']
  },
  {
    id: 'libraries-apis',
    category: 'Libraries & APIs',
    icon: '📚',
    technologies: ['TensorFlow.js', 'NumPy', 'Pandas', 'OpenAI API', 'VAPI.ai', 'Pinecone']
  },
  {
    id: 'design-dev-tools',
    category: 'Design & Dev Tools',
    icon: '🎨',
    technologies: ['Figma', 'VS Code', 'IntelliJ', 'Postman', 'Tailwind CSS']
  }
];

export const education: Education = {
  id: 'cornell',
  institution: 'Cornell University',
  location: 'Ithaca, NY',
  degree: 'Bachelor of Arts in Computer Science',
  date: 'Aug 2023 – May 2026 (expected)'
};

export const contact: Contact = {
  email: 'hz639@cornell.edu',
  location: 'Ithaca, NY',
  github: 'https://github.com/harveyzhu27',
  linkedin: 'https://www.linkedin.com/in/zhuharvey',
  resume: '/Harvey_Zhu_Resume.pdf'
}; 