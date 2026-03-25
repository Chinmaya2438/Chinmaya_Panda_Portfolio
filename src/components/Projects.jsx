/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaGithub as Github, FaExternalLinkAlt as ExternalLink } from "react-icons/fa";
import { fadeUp3D, hoverTilt, staggerContainer, sectionReveal } from '../utils/animations';

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-Commerce Platform",
      description: "A comprehensive E-Commerce web application built using the MERN stack featuring user authentication, product management, and a complete shopping experience.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      features: [
        "User authentication and authorization",
        "Complete shopping cart and checkout flow",
        "Admin dashboard for product management",
        "Responsive, modern user interface",
        "RESTful API architecture"
      ],
      github: "https://github.com/Chinmaya2438/E-Commerce-Website",
      live: "https://e-commerce-frontend-self-eight.vercel.app/",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      category: "Full-Stack"
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
            ~/projects $ <span className="text-primary-400 animate-blink">_</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-mono mt-4"
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
              className="ide-card group"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: index * 0.15 }}
            >
              {/* API Endpoint Header */}
              <div className="ide-header flex justify-between items-center text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-accent-cyan/20 text-accent-cyan rounded font-bold">GET</span>
                  <span className="text-gray-300">/api/v1/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>
                <span className="text-primary-400">200 OK</span>
              </div>

              <div className="ide-body p-0">
                {/* Project Image Preview */}
                <div className="relative overflow-hidden border-b border-editor-border">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-900 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-6 right-6">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2 font-mono"
                    >
                      {project.title}
                    </motion.h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.p 
                    className="text-gray-400 text-sm mb-6 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="mb-4 text-xs font-mono text-gray-500">
                    <span className="text-accent-magenta">const</span> <span className="text-white">stack</span> <span className="text-accent-cyan">=</span> [
                  </div>

                  {/* Technologies */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6 ml-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-editor-header text-accent-amber text-xs rounded border border-editor-border font-mono"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.05, borderColor: '#fbbf24' }}
                        transition={{ delay: index * 0.15 + techIndex * 0.05 }}
                      >
                        "{tech}"{techIndex < project.tech.length - 1 ? ',' : ''}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <div className="mb-6 text-xs font-mono text-gray-500">];</div>

                  {/* Features List as Terminal Output */}
                  <div className="bg-background-950 rounded-lg p-4 mb-8 border border-editor-border font-mono text-xs text-gray-400">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start gap-3 mb-2"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                      >
                        <span className="text-primary-500">{'>'}</span>
                        <span className="leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

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
                      className="flex justify-center items-center gap-3 btn-secondary flex-1"
                      variants={hoverTilt}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="whileHover"
                      whileTap="whileTap"
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex justify-center items-center gap-3 flex-1"
                      variants={hoverTilt}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="whileHover"
                      whileTap="whileTap"
                    >
                      <span>Execute Demo</span>
                      <ExternalLink size={14} />
                    </motion.a>
                  </motion.div>
                </div>
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
            className="ide-card p-6 inline-block text-left"
            variants={hoverTilt}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <div className="text-2xl font-bold text-gray-100 font-mono mb-4">
              Building next-gen systems...
            </div>
            <p className="text-gray-400 mb-6 font-mono text-sm max-w-md">Currently developing scalable backend architecture for upcoming projects. Stay tuned.</p>
            <motion.a
              href="#footer"
              className="btn-primary inline-flex items-center justify-center gap-3 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Initialize Contact</span>
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects
