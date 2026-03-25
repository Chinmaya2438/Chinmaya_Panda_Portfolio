/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaGraduationCap as GraduationCap, FaBriefcase as Briefcase, FaDatabase as Database, FaShieldAlt as Shield, FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa'
import { fadeUp3D, hoverTilt, staggerContainer, sectionReveal, cardFlip } from '../utils/animations';

const About = () => {
  const aboutPoints = [
    {
      icon: <GraduationCap size={28} />,
      title: "B.Tech in CSE – Data Science",
      description: "Strong foundation in computer science principles with specialization in data science methodologies and analytical thinking."
    },
    {
      icon: <Database size={28} />,
      title: "Backend-focused mindset",
      description: "Passionate about building robust, scalable backend systems and API architecture."
    },
    {
      icon: <Shield size={28} />,
      title: "Authentication systems",
      description: "Specialized in implementing secure authentication and authorization mechanisms for web applications."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Scalable backend architecture",
      description: "Experience designing and implementing scalable backend solutions using modern technologies."
    }
  ]

  return (
    <motion.section 
      id="about" 
      className="py-24 bg-gradient-to-br from-background-950 via-background-900 to-background-950"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            variants={fadeUp3D}
            initial="hidden"
            whileInView="visible"
          >
            ~/about $ <span className="text-primary-400 animate-blink">_</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-mono mt-4"
            variants={fadeUp3D}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            Dedicated Backend Developer with a passion for creating efficient, secure, and scalable web applications. 
            Specialized in authentication systems and modern backend architecture.
          </motion.p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="ide-card p-8"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <motion.h3 
                className="text-xl font-bold text-gray-100 mb-4 font-mono border-b border-editor-border pb-2"
                variants={fadeUp3D}
                initial="hidden"
                whileInView="visible"
              >
                // Backend Development Philosophy
              </motion.h3>
              <motion.p 
                className="text-gray-400 leading-relaxed font-mono text-sm"
                variants={fadeUp3D}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.1 }}
              >
                I believe in building backend systems that are not just functional, but elegant and maintainable. 
                My approach focuses on clean architecture, comprehensive testing, and documentation that makes 
                codebases accessible to the entire team.
              </motion.p>
            </motion.div>

            <motion.div
              className="ide-card p-8"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 0.2 }}
            >
              <motion.h3 
                className="text-xl font-bold text-gray-100 mb-4 font-mono border-b border-editor-border pb-2"
                variants={fadeUp3D}
                initial="hidden"
                whileInView="visible"
              >
                /* Technical Approach */
              </motion.h3>
              <motion.p 
                className="text-gray-400 leading-relaxed font-mono text-sm"
                variants={fadeUp3D}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.3 }}
              >
                I specialize in creating RESTful APIs that follow industry best practices, implementing 
                robust authentication systems, and designing database schemas that scale with growing 
                user demands.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Cards Grid */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {aboutPoints.map((point, index) => (
              <motion.div
                key={index}
                className="ide-card p-6"
                variants={fadeUp3D}
                initial="hidden"
                whileInView="visible"
                whileHover="whileHover"
                whileTap="whileTap"
                transition={{ delay: index * 0.15 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 bg-editor-bg border border-editor-border rounded flex items-center justify-center text-primary-400 shadow-neon-green flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {point.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-lg font-bold text-gray-100 mb-2 font-mono"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                    >
                      {point.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 font-mono text-sm leading-relaxed"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.1 }}
                    >
                      {point.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CGPA Highlight Section */}
        <motion.div
          className="mt-24 text-center"
          variants={fadeUp3D}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="inline-block ide-card p-10 font-mono text-left"
            variants={cardFlip}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <motion.div
              className="text-5xl font-bold text-primary-400 mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-gray-500 text-3xl">cgpa =&gt; </span>9.08
            </motion.div>
            <motion.div 
              className="text-accent-amber text-sm mb-2"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
            >
              "Academic Performance"
            </motion.div>
            <motion.div 
              className="text-xs text-gray-500 tracking-wide"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
            >
              B.Tech in Computer Science & Engineering
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
