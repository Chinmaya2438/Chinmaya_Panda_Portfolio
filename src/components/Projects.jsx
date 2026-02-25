/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaGithub as Github } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Simplifier",
      tech: "Node.js, Express.js, MongoDB, JWT",
      features: [
        "Secure login system",
        "Expense tracking",
        "Budget management",
        "RESTful API architecture"
      ],
      github: "https://github.com/Chinmaya2438/personal-finance-app"
    },
    {
      title: "Smart Study Planner",
      tech: "Node.js, Express.js, MongoDB",
      features: [
        "Priority-based tasks",
        "Deadline tracking",
        "JWT authentication"
      ],
      github: "https://github.com/Chinmaya2438/smart-study-planner"
    }
  ]

  return (
    <motion.section 
      id="projects" 
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
          <h2 className="section-title">Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Backend-focused projects showcasing authentication systems and scalable API design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={28} />
                  </a>
                </motion.div>
              </div>
              
              <p className="text-primary-400 font-mono text-sm mb-6">{project.tech}</p>
              
              <ul className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05, duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
