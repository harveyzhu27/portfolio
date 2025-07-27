import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 text-gray-800' 
          : 'bg-white/10 text-white'
      } backdrop-blur-md border-b border-white/20`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container flex justify-between items-center py-4">
        <motion.a 
          href="#" 
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Harvey Zhu
        </motion.a>
        <ul className="flex gap-8 list-none">
          {['projects', 'skills', 'experience', 'education', 'contact'].map((item) => (
            <motion.li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="relative transition-colors duration-300 hover:text-primary-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header; 