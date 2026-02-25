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
          ? 'bg-gradient-to-b from-background-950/90 to-background-950/60 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="text-3xl font-bold gradient-text"
            variants={hoverTilt}
            initial="hidden"
            animate="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            CP
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`relative font-semibold text-sm tracking-wide transition-all duration-300 px-4 py-2 rounded-lg ${
                  activeSection === item.id 
                    ? 'text-primary-400 bg-gradient-to-r from-primary-500/20 to-blue-500/20 border border-primary-500/40 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                variants={hoverTilt}
                initial="hidden"
                animate="visible"
                whileHover="whileHover"
                whileTap="whileTap"
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-blue-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <motion.a
              href="https://github.com/Chinmaya2438"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary-500/20 transition-all duration-300"
              variants={hoverTilt}
              initial="hidden"
              animate="visible"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Github size={20} className="text-gray-300 hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chinmaya-panda-30a3ba3a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary-500/20 transition-all duration-300"
              variants={hoverTilt}
              initial="hidden"
              animate="visible"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Linkedin size={20} className="text-gray-300 hover:text-white transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
