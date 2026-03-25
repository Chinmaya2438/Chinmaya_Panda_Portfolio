/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaAward as Award, FaCertificate as Certificate, FaMedal as Medal } from 'react-icons/fa'
import { fadeUp3D, hoverTilt, staggerContainer, glowPulse, sectionReveal } from '../utils/animations';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Training",
      issuer: "IIT Bombay (Spoken Tutorials)",
      description: "Comprehensive Java programming training covering core concepts and best practices. Developed strong foundation in object-oriented programming and software development principles.",
      icon: <Certificate size={36} />,
      color: "from-orange-400 to-red-400",
      date: "2024"
    },
    {
      title: "Programming, Data Structures and Algorithms Using Python",
      issuer: "NPTEL",
      description: "Advanced course on programming fundamentals and algorithmic thinking. Mastered essential data structures and algorithm design patterns for efficient problem-solving.",
      icon: <Award size={36} />,
      color: "from-blue-400 to-purple-400",
      date: "2024"
    },
    {
      title: "Top 20 – SOLVATHON-TACKLE",
      issuer: "GIETU",
      description: "Recognized among top 20 participants in competitive programming challenge. Demonstrated exceptional problem-solving skills and algorithmic thinking under pressure.",
      icon: <Medal size={36} />,
      color: "from-yellow-400 to-orange-400",
      date: "2024"
    }
  ]

  return (
    <motion.section 
      id="certifications" 
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
            ~/certifications $ <span className="text-primary-400 animate-blink">_</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-mono mt-4"
            variants={fadeUp3D}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            Recognized achievements and professional development in software engineering, showcasing dedication to continuous learning and excellence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="ide-card group flex flex-col h-full"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: index * 0.15 }}
            >
              <div className="ide-header justify-between text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-accent-cyan">cert_{index + 1}.pem</span>
                </div>
                <span className="text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded">Verified</span>
              </div>
              
              {/* Content */}
              <div className="ide-body p-6 flex-1 flex flex-col z-10">
                <motion.div
                  className="flex flex-col sm:flex-row items-start gap-4 mb-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.div
                    className="w-14 h-14 bg-background-950 rounded flex items-center justify-center text-primary-400 border border-editor-border shadow-neon-green flex-shrink-0"
                    variants={glowPulse}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="pulse"
                    transition={{ delay: index * 0.2 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-lg font-bold text-gray-100 mb-2 font-mono leading-tight"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                    >
                      {cert.title}
                    </motion.h3>
                    <motion.p 
                      className="text-accent-amber font-mono text-sm mb-3"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.1 }}
                    >
                      issuer: "{cert.issuer}"
                    </motion.p>
                    <motion.span 
                      className="inline-block px-2 py-1 bg-editor-header text-gray-400 text-xs border border-editor-border font-mono rounded"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.2 }}
                    >
                      {cert.date}
                    </motion.span>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-gray-400 leading-relaxed text-sm font-mono mt-auto"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.3 }}
                >
                  {cert.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Certifications
