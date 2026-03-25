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
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
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
              className="glass-card p-8 glow-effect"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                variants={fadeUp3D}
                initial="hidden"
                whileInView="visible"
              >
                Backend Development Philosophy
              </motion.h3>
              <motion.p 
                className="text-gray-300 leading-relaxed"
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
              className="glass-card p-8 glow-effect"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                variants={fadeUp3D}
                initial="hidden"
                whileInView="visible"
              >
                Technical Approach
              </motion.h3>
              <motion.p 
                className="text-gray-300 leading-relaxed"
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
                className="glass-card p-8 glow-effect card-3d"
                variants={fadeUp3D}
                initial="hidden"
                whileInView="visible"
                whileHover="whileHover"
                whileTap="whileTap"
                transition={{ delay: index * 0.15 }}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 shadow-sm"
                    whileHover={{ scale: 1.1, rotate: 5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {point.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-3"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                    >
                      {point.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 leading-relaxed"
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
            className="inline-block glass-card p-10 glow-effect border-glow-hover"
            variants={cardFlip}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <motion.div
              className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              9.08
            </motion.div>
            <motion.div 
              className="text-gray-400 text-lg mb-2"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
            >
              CGPA
            </motion.div>
            <motion.div 
              className="text-sm text-gray-500 tracking-wide"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
            >
              B.Tech in Computer Science & Engineering
            </motion.div>
            <motion.div
              className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
