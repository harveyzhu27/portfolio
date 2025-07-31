import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Profile Picture */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-2xl">
              <img 
                src="/assets/1749497469839.jpg" 
                alt="Harvey Zhu"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  // Fallback to a placeholder or different path
                  e.currentTarget.src = '/assets/1749497469839.jpg';
                }}
              />
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hello, I'm Harvey Zhu
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Computer Science Student & Game Developer
            </motion.p>
            <motion.button 
              onClick={() => scrollToSection('about')} 
              className="cta-button"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover My Work
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 