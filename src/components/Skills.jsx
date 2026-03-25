/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaCode as Code, FaDatabase as Database, FaServer as Server, FaShieldAlt as Shield, FaReact as ReactIcon } from 'react-icons/fa'
import { fadeUp3D, hoverTilt, staggerContainer, glowPulse, sectionReveal } from '../utils/animations';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server size={32} />,
      skills: [
        { name: "Node.js", level: 90, color: "from-green-400 to-blue-400" },
        { name: "Express.js", level: 85, color: "from-green-400 to-teal-400" },
        { name: "REST APIs", level: 95, color: "from-blue-400 to-purple-400" },
        { name: "JWT Authentication", level: 90, color: "from-purple-400 to-pink-400" },
        { name: "API Design", level: 88, color: "from-blue-400 to-cyan-400" }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={32} />,
      skills: [
        { name: "MongoDB", level: 85, color: "from-green-400 to-emerald-400" },
        { name: "MySQL", level: 75, color: "from-blue-400 to-sky-400" },
        { name: "Database Design", level: 80, color: "from-purple-400 to-violet-400" },
        { name: "ORM/ODM", level: 70, color: "from-pink-400 to-rose-400" }
      ]
    },
    {
      title: "Languages",
      icon: <Code size={32} />,
      skills: [
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-400" },
        { name: "Java", level: 85, color: "from-red-400 to-orange-400" },
        { name: "Python", level: 70, color: "from-blue-400 to-green-400" },
        { name: "HTML/CSS", level: 80, color: "from-orange-400 to-pink-400" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Shield size={32} />,
      skills: [
        { name: "Git & GitHub", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "Postman", level: 90, color: "from-orange-400 to-red-400" },
        { name: "VS Code", level: 95, color: "from-blue-400 to-indigo-400" },
        { name: "Terminal", level: 80, color: "from-green-400 to-gray-400" }
      ]
    }
  ]

  return (
    <motion.section 
      id="skills" 
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
            ~/skills $ <span className="text-primary-400 animate-blink">_</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-mono mt-4"
            variants={fadeUp3D}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            Comprehensive skill set focused on backend development, database management, and modern development practices.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="ide-card p-6 border border-editor-border/50"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: categoryIndex * 0.15 }}
            >
              {/* Category Header */}
              <motion.div
                className="flex items-center gap-4 mb-8 border-b border-editor-border/50 pb-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                <motion.div
                  className="w-12 h-12 bg-editor-bg border border-editor-border rounded flex items-center justify-center text-primary-400 shadow-sm"
                  variants={glowPulse}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="pulse"
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-gray-100 font-mono"
                    variants={fadeUp3D}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {category.title}
                  </motion.h3>
                  <motion.div 
                    className="w-16 h-0.5 bg-primary-500/50 mt-2"
                    variants={fadeUp3D}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.1 }}
                  />
                </div>
              </motion.div>

              {/* Skills Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group"
                    variants={fadeUp3D}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="whileHover"
                    whileTap="whileTap"
                    transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.08 }}
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-2 font-mono text-sm">
                      <motion.span 
                        className="text-gray-300 transition-colors group-hover:text-primary-400"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                      >
                        {'>'} {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-accent-cyan"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <motion.div
                        className="w-full h-1 bg-editor-border rounded-none overflow-hidden"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.1 }}
                      >
                        <motion.div
                          className="h-full bg-primary-500 rounded-none shadow-neon-green"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.15 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16"
          variants={fadeUp3D}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="ide-card p-8"
            variants={hoverTilt}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <div className="flex items-center gap-4 mb-6">
              <ReactIcon size={24} className="text-primary-500 animate-spin-slow" />
              <div>
                <h3 className="text-xl font-bold text-gray-100 font-mono">System Dependencies</h3>
                <p className="text-gray-400 font-mono text-xs mt-1">Installed global packages and development tools</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind CSS", "Framer Motion", "Vite", "NPM", "Yarn", "Docker", "AWS Basics"].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1.5 bg-background-950 text-accent-cyan rounded border border-editor-border hover:border-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300 font-mono text-sm"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
