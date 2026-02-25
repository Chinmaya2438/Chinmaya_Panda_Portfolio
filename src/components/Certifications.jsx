/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaAward as Award } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      title: "Java Training",
      issuer: "IIT Bombay (Spoken Tutorials)",
      description: "Comprehensive Java programming training covering core concepts and best practices."
    },
    {
      title: "Programming, Data Structures and Algorithms Using Python",
      issuer: "NPTEL",
      description: "Advanced course on programming fundamentals and algorithmic thinking."
    },
    {
      title: "Top 20 – SOLVATHON-TACKLE",
      issuer: "GIETU",
      description: "Recognized among top 20 participants in competitive programming challenge."
    }
  ]

  return (
    <motion.section 
      id="certifications" 
      className="py-20 bg-background-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognized achievements and professional development in software engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Award size={28} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-primary-400 font-semibold">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Certifications
