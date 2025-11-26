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
    description: 'Built an AI-supported assistant with GPT-3.5, Pinecone-based semantic search, and confidence scoring. Implemented real-time voice interaction with Vapi + WebRTC and a transcript processing pipeline that drives context-aware FAQ retrieval and accurate, source-grounded responses.',
    githubUrl: 'https://github.com/harveyzhu27/ai-customer-support',
    videoUrl: '/assets/ai-voice-assistant-clip.mp4',
    technologies: ['TypeScript', 'Next.js', 'React', 'Pinecone', 'Vapi', 'WebRTC', 'GPT-3.5', 'Real-time Processing']
  },
  {
    id: 'database-management-cli',
    title: 'Database Management CLI Tool',
    description: 'Built a CLI tool that parses natural language prompts into database operations and project updates, automating backend workflows with Drizzle ORM + PostgreSQL and scaffolding API routes for modern Next.js projects.',
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
    description: 'Directed development of an AI-powered enterprise search platform that reduced hallucinations by combining retrieval from 140+ trusted sources with multi-stage validation. Implemented secure RESTful API with dual authentication (JWT + user-provided keys), real-time streaming, and usage analytics while integrating SMTP via Resend and Vercel DNS for reliable deployment.',
    technologies: ['Enterprise Search', 'Retrieval-Augmented Generation', 'JWT Authentication', 'RESTful API', 'Streaming APIs', 'Resend', 'Vercel']
  },
  {
    id: 'teidore',
    title: 'Software Engineering Intern',
    company: 'Teidore',
    date: 'Jun 2025 – Sept 2025',
    description: 'Engineered high-throughput ETL pipelines between AWS S3 and PostgreSQL RDS over secure TCP/IP connections, hitting 5,000+ records/minute. Identified bottlenecks in an e-commerce schema and redesigned it with hierarchical categories and materialized views to cut latency by 40%. Built BERT + Ollama pipelines for auto-classification, boosting accuracy by 125%.',
    technologies: ['AWS S3', 'PostgreSQL RDS', 'ETL Pipelines', 'Schema Design', 'Materialized Views', 'BERT', 'Ollama']
  },
  {
    id: 'gilded-flame',
    title: 'Project Lead, Programmer, Artist',
    company: 'Gilded Flame',
    date: 'Jan 2025 – May 2025',
    description: 'Led a 9-person team to ship a game featuring dynamic lighting, AI-driven enemies, and complex puzzle logic within a single semester. Reallocated resources to resolve frontend/backend conflicts, maintained milestones, and presented the finished title to 150+ attendees at Cornell\'s GDIAC Showcase.',
    technologies: ['Java', 'LibGDX', 'Box2D', 'Game Development', 'Team Leadership', 'Production Management']
  }
];

export const leadership: Experience[] = [
  {
    id: 'teaching-assistant',
    title: 'Teaching Assistant – Data Structures & Functional Programming',
    company: 'Cornell University',
    date: 'Aug 2025 – Present',
    description: 'Lead discussion sections of 40+ students, hold weekly office hours supporting 30+ students, and partner with course staff to design assignments, projects, and exams while answering questions on Ed Discussion.',
    technologies: ['Teaching', 'Student Mentoring', 'Curriculum Design', 'Ed Discussion', 'Communication']
  },
  {
    id: 'research-assistant',
    title: 'Research Assistant – Cornell SC Johnson College of Business',
    company: 'Cornell University',
    date: 'Sept 2025 – Present',
    description: 'Build a full-stack Beer Game simulation with a Django backend, React frontend, and MySQL database plus token-based Canvas integration for course deployments. Implement multiplayer supply-chain logic with AI agents and LLM-based strategy evaluation paired with data visualizations for bullwhip and inventory insights.',
    technologies: ['Django', 'React', 'MySQL', 'Canvas API', 'Supply Chain Simulation', 'LLM Integration']
  }
];

export const skills: Skill[] = [
  {
    id: 'programming-languages',
    category: 'Programming Languages',
    icon: '💻',
    technologies: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'OCaml', 'C/C++', 'Kotlin', 'Rust', 'HTML/CSS']
  },
  {
    id: 'frameworks-tools',
    category: 'Frameworks & Tools',
    icon: '🛠️',
    technologies: ['React', 'Next.js', 'FastAPI', 'Node.js/Express', 'Django', 'Firebase', 'Docker', 'Supabase', 'TensorFlow.js']
  },
  {
    id: 'databases-cloud',
    category: 'Databases & Cloud',
    icon: '☁️',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS (S3, RDS, EC2, Amplify)', 'Vercel', 'Render']
  },
  {
    id: 'developer-tools',
    category: 'Developer Tools',
    icon: '🔧',
    technologies: ['Git', 'VS Code', 'IntelliJ', 'Eclipse', 'Postman', 'Ubuntu/Linux', 'Unix', 'PowerShell', 'CI/CD']
  }
];

export const education: Education = {
  id: 'cornell',
  institution: 'Cornell University',
  location: 'Ithaca, NY',
  degree: 'Bachelor of Arts in Computer Science',
  minor: 'Artificial Intelligence',
  gpa: '3.7',
  date: 'Expected May 2027',
  relevantCoursework: [
    'Object Oriented Programming',
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
  ]
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