/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'certifications', 'footer']
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        threshold: 0.25,
        rootMargin: '-100px 0px -100px 0px'
      }
    )

    sections.forEach(section => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Premium Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-50 origin-left"
        style={{ 
          scaleX,
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
        }}
      />
      
      <Navbar activeSection={activeSection} />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Footer />
      </main>

      {/* Floating Background Elements - Removed for professional sleekness */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-background-950 to-background-950"></div>
      </div>
    </motion.div>
  )
}

export default App
