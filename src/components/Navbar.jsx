/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { hoverTilt, fadeInScale } from '../utils/animations';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'footer', label: 'Contact' }
  ]

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background-950/95 backdrop-blur-md border-b border-editor-border shadow-neon-green' 
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-bold font-mono text-primary-400 tracking-wider flex items-center"
            variants={hoverTilt}
            initial="hidden"
            animate="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <span className="text-gray-500 mr-2">&lt;</span>CP<span className="text-gray-500 ml-1">/&gt;</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 font-mono">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`relative font-medium text-xs tracking-wide transition-all duration-300 px-4 py-2 rounded ${
                  activeSection === item.id 
                    ? 'text-primary-400 bg-primary-500/10' 
                    : 'text-gray-500 hover:text-gray-300 hover:bg-editor-bg'
                }`}
                variants={hoverTilt}
                initial="hidden"
                animate="visible"
                whileHover="whileHover"
                whileTap="whileTap"
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-gray-600 mr-1">#</span>{item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-2">
            <motion.a
              href="https://github.com/Chinmaya2438"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-editor-bg border border-editor-border hover:border-primary-400 hover:bg-primary-500/10 transition-all duration-300 text-gray-400 hover:text-primary-400"
              variants={hoverTilt}
              initial="hidden"
              animate="visible"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chinmaya-panda-30a3ba3a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-editor-bg border border-editor-border hover:border-primary-400 hover:bg-primary-500/10 transition-all duration-300 text-gray-400 hover:text-primary-400"
              variants={hoverTilt}
              initial="hidden"
              animate="visible"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
