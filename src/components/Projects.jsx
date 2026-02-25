/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaGithub as Github, FaExternalLinkAlt as ExternalLink } from "react-icons/fa";
import { fadeUp3D, hoverTilt, staggerContainer, sectionReveal } from '../utils/animations';

const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Simplifier",
      description: "A comprehensive financial management application with secure authentication and real-time expense tracking.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "RESTful API"],
      features: [
        "Secure JWT-based authentication system",
        "Real-time expense tracking and categorization",
        "Budget management with spending limits",
        "RESTful API with comprehensive endpoints",
        "Data validation and error handling"
      ],
      github: "https://github.com/Chinmaya2438/personal-finance-app",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Backend API"
    },
    {
      title: "Smart Study Planner",
      description: "An intelligent task management system designed for students with priority-based organization and deadline tracking.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Task Management"],
      features: [
        "Priority-based task categorization",
        "Deadline tracking with reminders",
        "JWT authentication for data security",
        "RESTful API design principles",
        "User-friendly task management interface"
      ],
      github: "https://github.com/Chinmaya2438/smart-study-planner",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      category: "Backend API"
    }
  ]

  return (
    <motion.section 
      id="projects" 
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
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            variants={fadeUp3D}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            Backend-focused projects showcasing authentication systems, scalable API design, and modern development practices.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card p-0 glow-effect card-3d group"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: index * 0.15 }}
            >
              {/* Project Image Preview */}
              <div className="relative overflow-hidden rounded-t-xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <motion.div
                  className="absolute top-4 right-4 bg-primary-500/90 text-white px-3 py-1 rounded-full text-sm font-medium border border-primary-400/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {project.category}
                </motion.div>
                <div className="absolute bottom-4 left-4">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.25 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-200 text-sm max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-blue-500/20 text-primary-300 text-sm rounded-full border border-primary-500/30 font-mono"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                      transition={{ delay: index * 0.15 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Features List */}
                <motion.ul 
                  className="space-y-3 mb-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                >
                  {project.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start gap-4 text-gray-300 group-hover:text-white transition-colors"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                    >
                      <motion.div
                        className="w-3 h-3 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full mt-1 flex-shrink-0 shadow-lg group-hover:scale-125 transition-transform"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.1 }}
                      />
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 btn-primary group/btn"
                    variants={hoverTilt}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="whileHover"
                    whileTap="whileTap"
                    transition={{ delay: index * 0.15 + project.features.length * 0.05 }}
                  >
                    <Github size={20} />
                    <span>View Code</span>
                    <motion.div
                      className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover/btn:bg-white/40 transition-colors"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink size={14} />
                    </motion.div>
                  </motion.a>
                  
                  <motion.button
                    className="btn-secondary flex items-center gap-3"
                    variants={hoverTilt}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="whileHover"
                    whileTap="whileTap"
                    transition={{ delay: index * 0.15 + project.features.length * 0.05 + 0.1 }}
                  >
                    <span>Live Demo</span>
                    <motion.div
                      className="w-5 h-5 bg-primary-500/20 rounded-full flex items-center justify-center border border-primary-400/50"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ExternalLink size={14} className="text-primary-400" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          variants={fadeUp3D}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="glass-card p-8 glow-effect border-glow-hover inline-block"
            variants={hoverTilt}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              More Projects Coming Soon
            </div>
            <p className="text-gray-400 mb-6">Currently working on exciting new backend projects</p>
            <motion.a
              href="#footer"
              className="btn-primary inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in Touch</span>
              <motion.div
                className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink size={20} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects
