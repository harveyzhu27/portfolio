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
    id: 'voice-support-chatbot',
    title: 'Voice-Enabled Support Chatbot',
    description: 'Developed AI assistant with GPT-3.5, Pinecone embeddings, and confidence scoring. Implemented real-time voice interaction using Vapi and WebRTC. Created transcript processing pipeline for context-aware FAQ retrieval with intelligent, source-attributed answers.',
    githubUrl: 'https://github.com/harveyzhu27/ai-customer-support',
    videoUrl: '/assets/ai-voice-assistant-clip.mp4',
    technologies: ['TypeScript', 'Next.js', 'React', 'Pinecone', 'Vapi', 'WebRTC', 'GPT-3.5', 'Real-time Processing']
  },
  {
    id: 'database-management-cli',
    title: 'Database Management CLI Tool',
    description: 'Built CLI tool for schema generation, migrations, and routes. Automated backend integration with Drizzle ORM + PostgreSQL. Integrated OpenAI NLP to parse natural language into structured DB operations, fully automating feature creation for Next.js projects.',
    githubUrl: 'https://github.com/harveyzhu27/database-subagent',
    technologies: ['TypeScript', 'PostgreSQL', 'Next.js', 'Drizzle ORM', 'CLI', 'OpenAI NLP', 'Database Automation']
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
    id: 'hawl-technologies',
    title: 'Software Engineering Intern, Technical Lead',
    company: 'Hawl Technologies',
    date: 'Aug 2025 – Sept 2025',
    description: 'Directed development of AI-powered enterprise search platform combining retrieval from 140+ trusted sources with multi-stage validation. Implemented secure RESTful API with JWT + user-provided key authentication, real-time streaming, and analytics. Engineered MongoDB Atlas schema with JSON validation, compound indexing, and encryption-at-rest.',
    technologies: ['AI/ML', 'RESTful API', 'JWT Authentication', 'MongoDB Atlas', 'Real-time Streaming', 'Enterprise Search', 'Data Validation']
  },
  {
    id: 'teidore',
    title: 'Software Engineering Intern',
    company: 'Teidore',
    date: 'Jun 2025 – Sept 2025',
    description: 'Deployed automated CI/CD pipelines on AWS Amplify, EC2, and CloudWatch. Designed Python ETL pipeline migrating retailer data from AWS S3 to PostgreSQL RDS at 5,000+ records/min. Redesigned e-commerce schema with hierarchical categories and materialized views, reducing query latency by 40%. Built AI/ML pipelines with BERT and Ollama, improving classification accuracy by 125%.',
    technologies: ['AWS', 'CI/CD', 'Python ETL', 'PostgreSQL', 'S3', 'RDS', 'BERT', 'Ollama', 'CloudWatch', 'Schema Design']
  },
  {
    id: 'gilded-flame',
    title: 'Project Lead, Programmer, Artist',
    company: 'Gilded Flame',
    date: 'Jan 2025 – May 2025',
    description: 'Led 9-person team to build a game with dynamic lighting, AI-driven enemies, and puzzle logic. Resolved production challenges and kept milestones on track. Presented final game to 150+ attendees at Cornell\'s GDIAC Showcase.',
    technologies: ['Java', 'LibGDX', 'Box2D', 'Game Development', 'Project Leadership', 'Team Management', 'AI Programming']
  }
];

export const leadership: Experience[] = [
  {
    id: 'chess-tournament-lead',
    title: 'Tournament Lead',
    company: 'Cornell Chess Club',
    date: 'Cornell University',
    description: 'Managed tournament logistics and team coordination for national events including Pan American Collegiate, Inter Ivy, and Amateur Team East. Responsibilities included promoting tournaments, handling registrations and USCF compliance, coordinating travel and lodging, and serving as the primary liaison with tournament organizers to ensure smooth participation and reimbursement processes.',
    technologies: ['Event Management', 'Logistics Coordination', 'Team Leadership', 'USCF Compliance', 'Travel Planning', 'Budget Management']
  }
];

export const skills: Skill[] = [
  {
    id: 'programming-languages',
    category: 'Programming Languages',
    icon: '💻',
    technologies: ['Java', 'JavaScript', 'TypeScript', 'HTML/CSS/JS', 'Python', 'SQL', 'OCaml', 'C', 'C++', 'Kotlin', 'Rust']
  },
  {
    id: 'frameworks-tools',
    category: 'Frameworks & Tools',
    icon: '🛠️',
    technologies: ['React', 'Next.js', 'FastAPI', 'Node.js/Express', 'Firebase', 'Docker', 'Supabase', 'PostgreSQL', 'MongoDB', 'AWS (S3, RDS, EC2, Amplify)', 'Vercel', 'Render', 'TensorFlow.js', 'BERT', 'Pinecone', 'Ollama', 'Electron', 'JetPack Compose']
  },
  {
    id: 'developer-tools',
    category: 'Developer Tools',
    icon: '🔧',
    technologies: ['Git', 'VS Code', 'IntelliJ', 'Eclipse', 'Postman', 'Ubuntu/Linux', 'CI/CD (GitHub Actions, AWS Amplify)']
  },
  {
    id: 'design-tools',
    category: 'Design & UI',
    icon: '🎨',
    technologies: ['Figma', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design']
  }
];

export const education: Education = {
  id: 'cornell',
  institution: 'Cornell University',
  location: 'Ithaca, NY',
  degree: 'Bachelor of Arts in Computer Science',
  minor: 'Artificial Intelligence',
  gpa: '3.7',
  date: 'Aug 2023 – May 2027 (expected)',
  relevantCoursework: [
    'Data Structures',
    'Functional Programming', 
    'Analysis of Algorithms',
    'Operating Systems',
    'Computer Graphics',
    'Game Design',
    'Machine Learning',
    'Computer System Organization',
    'Backend Development',
    'Android Development',
    'Discrete Structures',
    'Linear Algebra',
    'Probability Models and Inference'
  ],
  teachingAssistant: {
    role: 'Teaching Assistant – Data Structures & Functional Programming',
    dates: 'Aug 2025 – Present',
    responsibilities: [
      'Lead discussion sessions for 40+ students',
      'Hold weekly office hours for 30+ students',
      'Collaborate with professor on assignments, projects, and exams',
      'Assist students via Ed Discussion forums'
    ]
  },
  researchAssistant: {
    role: 'Research Assistant – Cornell SC Johnson College of Business',
    dates: 'Sept 2025 – Present',
    responsibilities: [
      'Building a full-stack Beer Game for supply chain simulation with backend and interactive frontend',
      'Developing AI agents and integrating LLMs for strategy analysis and decision emulation'
    ]
  }
};

export const contact: Contact = {
  email: 'hz639@cornell.edu',
  phone: '713-380-8227',
  location: 'Ithaca, NY',
  github: 'https://github.com/harveyzhu27',
  linkedin: 'https://www.linkedin.com/in/zhuharvey',
  portfolio: 'https://harvey-zhu.vercel.app',
  resume: '/assets/Harvey_Zhu_Resume.pdf'
}; 