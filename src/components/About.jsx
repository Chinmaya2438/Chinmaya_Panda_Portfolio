/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaGraduationCap as GraduationCap, FaBriefcase as Briefcase } from 'react-icons/fa'

const About = () => {
  const aboutPoints = [
    {
      icon: <GraduationCap size={24} />,
      title: "B.Tech in CSE – Data Science",
      description: "Strong foundation in computer science principles with specialization in data science methodologies and analytical thinking."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Backend-focused mindset",
      description: "Passionate about building robust, scalable backend systems and API architecture."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Authentication systems",
      description: "Specialized in implementing secure authentication and authorization mechanisms for web applications."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Scalable backend architecture",
      description: "Experience designing and implementing scalable backend solutions using modern technologies."
    }
  ]

  return (
    <motion.section 
      id="about" 
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
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dedicated Backend Developer with a passion for creating efficient, secure, and scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-400">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold">{point.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="glass-card p-8 inline-block">
            <div className="text-4xl font-bold text-primary-400 mb-2">9.08</div>
            <div className="text-gray-400">CGPA</div>
            <div className="text-sm text-gray-500 mt-2">B.Tech in Computer Science & Engineering</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About