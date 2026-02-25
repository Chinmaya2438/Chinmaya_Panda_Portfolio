/* eslint-disable no-unused-vars */
import { motion, useAnimation } from 'framer-motion'
import { FaDownload as Download, FaChevronDown as ChevronDown } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { fadeUp3D, hoverTilt, staggerContainer, floating } from '../utils/animations';

const Hero = () => {
  const controls = useAnimation()
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Backend Developer | MERN Stack Specialist'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    controls.start({
      opacity: [0, 1, 1, 0],
      scale: [0.8, 1.05, 1, 1],
      transition: {
        duration: 2,
        ease: "easeOut",
        times: [0, 0.2, 0.8, 1]
      }
    })
  }, [controls])

  return (
    <motion.section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="floating-shape top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-blue-500/20"
          variants={floating}
          animate="float"
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="floating-shape top-40 right-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/15 to-cyan-500/15"
          variants={floating}
          animate="float"
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="floating-shape bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-primary-500/15"
          variants={floating}
          animate="float"
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Radial Light Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial opacity-50"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <motion.div
          className="glass-card p-10 md:p-16 glow-effect"
          variants={fadeUp3D}
          initial="hidden"
          animate="visible"
          whileHover="whileHover"
          whileTap="whileTap"
        >
          {/* Name with Premium Gradient */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              className="gradient-text"
              variants={fadeUp3D}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Chinmaya
            </motion.span>{' '}
            <motion.span 
              className="text-white"
              variants={fadeUp3D}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              Panda
            </motion.span>
          </motion.h1>

          {/* Animated Title */}
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide"
            variants={fadeUp3D}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <span className="inline-block border-r-2 border-primary-400 pr-2">
              {displayText}
            </span>
            <span className="animate-pulse">|</span>
          </motion.p>

          {/* Professional Summary */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto"
            variants={fadeUp3D}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            Backend Developer specializing in Node.js and MongoDB with practical experience building authentication-driven web applications. 
            Strong understanding of REST API architecture, secure session management, and structured database design. 
            Passionate about building scalable and production-ready backend systems.
          </motion.p>

          {/* CTA Buttons with Premium Design */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 1 }}
          >
            <motion.a 
              href="#projects"
              className="btn-primary flex items-center gap-3 text-lg font-semibold group"
              variants={hoverTilt}
              initial="hidden"
              animate="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 1 }}
            >
              <span>View Projects</span>
              <motion.div
                className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.a>
            
            <motion.a 
              href="/resume.pdf" 
              download="Chinmaya_Panda_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-3 text-lg font-semibold group"
              variants={hoverTilt}
              initial="hidden"
              animate="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 1.2 }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Premium Animation */}
        <motion.div
          className="mt-16 flex justify-center"
          variants={fadeUp3D}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
        >
          <motion.a 
            href="#about" 
            className="flex flex-col items-center text-gray-400 hover:text-white transition-all duration-300 group"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm mb-3 tracking-wide opacity-70 group-hover:opacity-100 transition-opacity">
              Explore My Journey
            </span>
            <motion.div
              className="w-8 h-12 border-2 border-primary-400/50 rounded-full flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-2 h-2 bg-primary-400 rounded-full mt-2 group-hover:scale-150 transition-transform"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
