/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaBriefcase as Briefcase, FaCalendar as Calendar } from "react-icons/fa";
import { fadeUp3D, hoverTilt, staggerContainer, timelineDot, sectionReveal } from '../utils/animations';

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
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "React"]
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
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "Authentication"]
    }
  ]

  return (
    <motion.section 
      id="experience" 
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
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            variants={fadeUp3D}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            Building scalable backend systems and full-stack applications with modern technologies. 
            Focused on creating robust, secure, and maintainable codebases.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/60 via-blue-500/40 to-transparent"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delayChildren: index * 0.1 }}
              >
                {/* Timeline Dot with Premium Animation */}
                <motion.div
                  className="timeline-dot absolute left-6 z-10"
                  variants={timelineDot}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="pulse"
                  transition={{ delay: index * 0.1 }}
                />

                {/* Content Card with 3D Effect */}
                <motion.div
                  className="glass-card p-8 ml-16 glow-effect card-3d"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Header */}
                  <motion.div
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.p 
                        className="text-primary-400 font-semibold text-lg"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.1 }}
                      >
                        {exp.company}
                      </motion.p>
                    </div>
                    <motion.div 
                      className="flex items-center gap-3 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10"
                      variants={fadeUp3D}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.2 }}
                    >
                      <Calendar size={20} />
                      <span className="font-mono">{exp.period}</span>
                    </motion.div>
                  </motion.div>

                  {/* Description List */}
                  <motion.ul 
                    className="space-y-3 mb-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-4 text-gray-300"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: index * 0.15 + itemIndex * 0.05 }}
                      >
                        <motion.div
                          className="w-3 h-3 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full mt-2 flex-shrink-0 shadow-lg"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: itemIndex * 0.1 }}
                        />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Technologies Used */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {exp.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-blue-500/20 text-primary-300 text-sm rounded-full border border-primary-500/30 font-mono"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                        transition={{ delay: index * 0.15 + exp.description.length * 0.05 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Footer */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeUp3D}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 glass-card p-6 glow-effect"
            variants={hoverTilt}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <motion.div
              className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <div>
              <span className="text-gray-400">Currently seeking new opportunities</span>
              <div className="text-white font-semibold">Let's build something amazing together</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience
