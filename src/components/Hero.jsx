/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaDownload as Download, FaChevronDown as ChevronDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <motion.section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-950 via-blue-900/20 to-background-950"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-4xl"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-8 md:p-12"
        >
          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-gradient">Chinmaya</span> <span className="text-white">Panda</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Backend Developer | MERN Stack Specialist
          </motion.p>

          {/* Professional Summary */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Backend Developer specializing in Node.js and MongoDB with practical experience building authentication-driven web applications. 
            Strong understanding of REST API architecture, secure session management, and structured database design. 
            Passionate about building scalable and production-ready backend systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="#projects"
              className="btn-primary flex items-center gap-2"
            >
              View Projects
              <ChevronDown size={20} />
            </a>
            
            <a 
              href="/resume.pdf" 
              download
              className="btn-secondary flex items-center gap-2"
            >
              Download Resume
              <Download size={20} />
            </a>
            
            <a 
              href="#footer"
              className="btn-primary"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero