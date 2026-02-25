/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaBriefcase as Briefcase, FaCalendar as Calendar } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "LumenXo x PreppRight",
      period: "May 2025 – July 2025",
      description: [
        "Built Personal Finance web app",
        "Developed REST APIs using Express.js",
        "Implemented JWT authentication",
        "Designed MongoDB schemas",
        "Built responsive UI"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Pantech Solutions",
      period: "April 2024 – May 2024",
      description: [
        "Developed full-stack applications",
        "Backend with Node.js & Express",
        "MongoDB integration",
        "Authentication system implementation"
      ]
    }
  ]

  return (
    <motion.section 
      id="experience" 
      className="py-20"
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
          <h2 className="section-title">Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional experience in web development with a focus on backend technologies and scalable solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-background-950 z-10"></div>
                
                {/* Content */}
                <div className="glass-card p-8 ml-16 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-primary-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={20} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.2 + itemIndex * 0.1, duration: 0.4 }}
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
