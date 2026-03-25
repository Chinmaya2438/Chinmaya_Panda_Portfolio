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
                  className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20"
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
                      className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10 font-mono"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
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
                        className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 group-hover:bg-white transition-all"
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
                  
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center border border-white/20"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ExternalLink size={12} className="text-white" />
                    </motion.div>
                  </motion.a>
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
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-4 tracking-tight">
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
