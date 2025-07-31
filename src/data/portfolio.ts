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
    description: 'A full‑stack AI customer support platform with real‑time voice conversations, semantic search, and context‑aware responses. Combines Vapi AI for voice, OpenAI for NLP, and Pinecone for vector search to deliver intelligent, source‑attributed answers with live transcription and a modern, responsive Next.js frontend.',
    githubUrl: 'https://github.com/harveyzhu27/ai-customer-support',
    videoUrl: '/assets/ai-voice-assistant-clip.mp4',
    technologies: ['Next.js', 'Python', 'OpenAI API', 'VAPI.ai', 'Pinecone', 'RAG', 'Tailwind CSS']
  },
  {
    id: 'ai-database-sub-agent',
    title: 'AI Database Sub-agent',
    description: 'A CLI‑driven tool that converts natural language requests into database schemas, API routes, and frontend components, fully automating feature creation for Next.js projects. Integrates PostgreSQL, Drizzle ORM, and React 19 to streamline database management and end‑to‑end app functionality.',
    githubUrl: 'https://github.com/harveyzhu27/ai-database-sub-agent',
    technologies: ['CLI', 'PostgreSQL', 'Drizzle ORM', 'React 19', 'Next.js', 'TypeScript', 'Database Automation']
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
    description: 'At Teidore, I develop AI/ML‑powered product tagging and compatibility systems using OpenAI APIs, Ollama, and BERT, improving data categorization and query speed. I design ETL pipelines and AWS ingestion workflows that scrape, normalize, and store large‑scale e‑commerce data in S3/RDS, with reusable schemas and cost‑aware architecture. I also refactor Supabase SQL queries to enhance advanced search performance and lead UX/performance improvements on user‑facing aerospace pages.',
    technologies: ['OpenAI API', 'Ollama', 'BERT', 'AWS', 'S3', 'RDS', 'ETL', 'Supabase', 'LLM/NLP']
  },
  {
    id: 'hawl-technologies',
    title: 'AI & CS Intern',
    company: 'Hawl Technologies',
    date: '2024 – Present',
    description: 'I contribute to building an AI memory platform that aggregates data from multiple AI tools for fast, context‑aware search and retrieval. My work spans vector databases, data scrapers, and authentication/payment system design, with a focus on local storage security and future cloud migration to enable a scalable and secure AI experience.',
    technologies: ['AI/ML', 'Vector Databases', 'Data Scraping', 'Authentication', 'Payment Systems', 'Local Storage', 'Cloud Migration']
  }
];

export const leadership: Experience[] = [
  {
    id: 'gilded-flame-lead',
    title: 'Project Lead – Gilded Flame',
    company: 'Cornell University',
    date: 'Cornell University',
    description: 'I led a 9‑person team to develop a puzzle‑platformer game featuring dynamic light/shadow mechanics, torch‑throwing, enemy AI, and physics‑based collisions. I architected core gameplay systems in Java with LibGDX and Box2D and served as lead level designer, integrating assets and ensuring smooth platforming logic. Beyond coding, I bridged communication between programmers and artists, ran play‑testing sessions, and oversaw marketing and live demos at Cornell\'s GDIAC Showcase for 150+ attendees.',
    technologies: ['Project Leadership', 'Team Coordination', 'Game Development', 'Java', 'LibGDX', 'Box2D', 'Level Design', 'Marketing', 'Event Management']
  },
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
    technologies: ['Java', 'JavaScript/TypeScript', 'Python', 'SQL', 'OCaml', 'HTML/CSS']
  },
            {
            id: 'tools-frameworks',
            category: 'Tools & Frameworks',
            icon: '🛠️',
            technologies: ['React', 'Next.js', 'Flask', 'Firebase', 'LibGDX', 'Box2D', 'Docker', 'Git', 'Supabase', 'AWS']
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
  resume: '/assets/Harvey_Zhu_Resume.pdf'
}; 