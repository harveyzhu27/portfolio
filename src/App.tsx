import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import { projects, experiences, leadership, skills, education, contact } from './data/portfolio';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <main className="bg-white relative z-10">
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I'm a <strong>Computer Science student at Cornell University</strong> passionate about building
                  things that blend logic, creativity, and design. My interests span <strong>full-stack
                  development</strong>, <strong>game design</strong>, and the use of <strong>art and visual
                  storytelling</strong> to make software more human and engaging.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I aim to create tools and games that are not just functional, but also thoughtful and
                  expressive—whether that means designing smarter ways to manage tasks or crafting interactive
                  stories that invite players into new worlds.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Outside of tech, I enjoy <strong>chess</strong>, <strong>basketball</strong>, and 
                  <strong>drawing</strong>, all of which inspire how I think about strategy, aesthetics, and user
                  experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-50">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <div key={project.id}>
                  <div className="project-card">
                    <div className="h-40 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                      {project.videoUrl ? (
                        <video 
                          className="w-full h-full object-cover rounded-t-xl"
                          controls
                          preload="metadata"
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <span className="text-4xl">{project.emoji || '🎮'}</span>
                      )}
                    </div>
                    
                                         <div className="p-4 flex flex-col h-100">
                       <h3 className="text-lg font-bold mb-2 text-gray-800">{project.title}</h3>
                       <p className="text-gray-600 mb-3 text-xs leading-relaxed flex-grow">{project.description}</p>
                       
                       <div className="mt-auto">
                         <a 
                           href={project.githubUrl} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-primary-500 font-semibold text-sm hover:text-secondary-500 transition-colors mb-3 block"
                         >
                           View Project →
                         </a>
                         
                         <div className="tech-tags mt-2">
                           {project.technologies.map((tech, techIndex) => (
                             <span key={techIndex} className="tech-tag text-xs px-2 py-1">
                               {tech}
                             </span>
                           ))}
                         </div>
                       </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className="skill-card-compact"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{skill.category}</h3>
                  <p className="text-gray-600 text-sm">{skill.technologies.join(', ')}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Work Experience Column */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Work</h3>
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    className="experience-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                      <span className="text-primary-500 font-bold text-sm">{experience.date}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{experience.description}</p>
                    
                    <div className="tech-tags">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Leadership Experience Column */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Leadership</h3>
                {leadership.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    className="experience-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                      <span className="text-primary-500 font-bold text-sm">{experience.date}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{experience.description}</p>
                    
                    <div className="tech-tags">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Contact Section */}
        <section id="education-contact" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education Column */}
              <div>
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Education
                </motion.h2>
                
                                 <motion.div
                   className="education-item"
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6 }}
                   viewport={{ once: true }}
                 >
                   <div className="text-center mb-4">
                     <h3 className="text-2xl font-bold text-gray-800 mb-2">{education.institution}</h3>
                     <p className="text-primary-500 font-bold text-sm">{education.location}</p>
                   </div>
                   <div className="text-center">
                     <p className="font-bold text-gray-800 mb-2">{education.degree}</p>
                     <p className="text-gray-600 text-sm">{education.date}</p>
                   </div>
                 </motion.div>
              </div>

              {/* Contact Column */}
              <div>
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Get In Touch
                </motion.h2>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-gray-700 mb-2">📍 {contact.location}</p>
                  <p className="text-lg text-gray-700 mb-2">📧 {contact.email}</p>
                  <p className="text-lg text-gray-700 mb-8">Ready to collaborate on exciting projects? Let's connect!</p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href={contact.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cta-button"
                    >
                      GitHub
                    </a>
                    <a 
                      href={contact.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cta-button"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href={contact.resume} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="cta-button"
                    >
                      Resume (PDF)
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href={`mailto:${contact.email}`} className="text-2xl hover:text-primary-300 transition-colors">📧</a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary-300 transition-colors">🐙</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary-300 transition-colors">💼</a>
            <a href={contact.resume} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary-300 transition-colors">📄</a>
          </div>
          <p>&copy; 2025 Harvey Zhu. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            <strong>Education:</strong> Cornell University — B.A. Computer Science (Aug 2023 – May 2026) |
            <strong>Experience:</strong> Intern at Teidore (2025 – Present) | Project Lead – Gilded Flame
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App; 