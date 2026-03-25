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
      {/* Animated Background Removed for Minimalist Look */}
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0">

      </div>


      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Content */}
        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            className="text-left"
            variants={fadeUp3D}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary-500/10 border border-primary-500/30 text-primary-400 font-mono text-sm shadow-neon-green">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-blink"></div>
              <span>System.out.println("Hello World");</span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
            >
              <span className="text-white block">Chinmaya</span>
              <span className="text-primary-400 block">Panda</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl bg-editor-bg/50 p-3 rounded-md border border-editor-border mb-6 font-mono shadow-sm inline-block"
            >
              <span className="text-highlight">const</span> <span className="text-white">role</span> <span className="text-accent-cyan">=</span> <span className="text-string">'{displayText}'</span><span className="animate-blink">|</span>
            </motion.p>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Backend Developer specializing in Node.js and MongoDB with practical experience building authentication-driven web applications. Strong understanding of REST API architecture, secure session management, and structured database design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Execute Projects
              </motion.a>
              <motion.a 
                href="/resume.pdf" 
                download="Chinmaya_Panda_Resume.pdf"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - IDE Window */}
          <motion.div
            className="ide-card w-full max-w-lg mx-auto lg:mx-0 hidden md:block"
            variants={fadeUp3D}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="ide-header justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-accent-amber"></div>
                <div className="w-3 h-3 rounded-full bg-primary-500"></div>
              </div>
              <div className="text-gray-400 text-xs font-mono">portfolio.json</div>
            </div>
            <div className="ide-body text-base">
              <div className="text-accent-cyan">&#123;</div>
              <div className="ml-6 py-1">
                <span className="text-highlight">"name"</span>: <span className="text-string">"Chinmaya Panda"</span>,
              </div>
              <div className="ml-6 py-1">
                <span className="text-highlight">"role"</span>: <span className="text-string">"Backend Developer"</span>,
              </div>
              <div className="ml-6 py-1">
                <span className="text-highlight">"skills"</span>: [
              </div>
              <div className="ml-12 py-1 text-string">
                "Node.js", "Express", "MongoDB", "Java"
              </div>
              <div className="ml-6 py-1">],</div>
              <div className="ml-6 py-1">
                <span className="text-highlight">"status"</span>: <span className="text-number">200</span>,
              </div>
              <div className="ml-6 py-1">
                <span className="text-highlight">"passion"</span>: <span className="text-string">"Building Scalable Systems"</span>
              </div>
              <div className="text-accent-cyan">&#125;</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
