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
            ~/experience $ <span className="text-primary-400 animate-blink">_</span>
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
          <div className="absolute left-[39px] top-4 bottom-0 w-0.5 bg-editor-border"></div>
          
          <div className="space-y-16">
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
                {/* Git Commit Node */}
                <motion.div
                  className="absolute left-8 top-6 z-10 w-5 h-5 rounded-full border-4 border-primary-500 bg-background-950 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1 }}
                />

                {/* Content Card with IDE Effect */}
                <motion.div
                  className="ide-card ml-20"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="ide-header flex-col items-start gap-1 p-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 w-full border-b border-editor-border/50 pb-2 mb-2">
                       <span className="text-accent-amber">commit</span> 
                       <span className="text-accent-cyan">{Math.random().toString(36).substring(2, 9)}</span>
                       <span className="ml-auto flex items-center gap-2"><Calendar size={12} /> {exp.period}</span>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <motion.h3 
                        className="text-xl font-bold text-gray-100 font-mono"
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.p 
                        className="text-primary-400 font-mono text-sm bg-primary-500/10 px-3 py-1 rounded"
                      >
                        @{exp.company}
                      </motion.p>
                    </div>
                  </div>

                  {/* Description List */}
                  <div className="ide-body bg-editor-bg p-6">
                    <motion.ul 
                      className="space-y-2 mb-6 font-mono text-sm text-gray-400"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                    >
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-4"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: index * 0.15 + itemIndex * 0.05 }}
                      >
                        <span className="text-accent-magenta mt-1">+</span>
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
                        className="px-2 py-1 bg-editor-header text-accent-cyan text-xs rounded border border-editor-border font-mono shadow-sm"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.05, borderColor: '#22d3ee' }}
                        transition={{ delay: index * 0.15 + exp.description.length * 0.05 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  </div>
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
            className="inline-flex items-center gap-4 ide-card p-4"
            variants={hoverTilt}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <motion.div
              className="w-3 h-3 bg-primary-500 rounded-full animate-blink shadow-neon-green"
            />
            <div className="text-left">
              <span className="text-gray-500 font-mono text-sm">Status:</span>
              <div className="text-gray-300 font-mono text-sm">Awaiting pull request (Seeking new roles)</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience
