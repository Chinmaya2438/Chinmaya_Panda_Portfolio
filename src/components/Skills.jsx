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
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
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
              className="glass-card p-8 glow-effect card-3d"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: categoryIndex * 0.15 }}
            >
              {/* Category Header */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                <motion.div
                  className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white shadow-sm"
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
                    className="text-2xl font-bold text-white mb-2"
                    variants={fadeUp3D}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {category.title}
                  </motion.h3>
                  <motion.div 
                    className="w-20 h-1 bg-white/30 rounded-full"
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
                    <div className="flex justify-between items-center mb-2">
                      <motion.span 
                        className="text-white font-semibold transition-colors"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-gray-400 text-sm font-mono"
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
                        className="w-full h-3 bg-white/10 rounded-full overflow-hidden"
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.1 }}
                      >
                        <motion.div
                          className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
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
            className="glass-card p-8 glow-effect"
            variants={hoverTilt}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <div className="flex items-center gap-4 mb-6">
              <ReactIcon size={32} className="text-white" />
              <div>
                <h3 className="text-xl font-bold text-white">Additional Technologies</h3>
                <p className="text-gray-400">Familiar with modern frontend and development tools</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind CSS", "Framer Motion", "Vite", "NPM", "Yarn", "Docker", "AWS Basics"].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-white/5 text-gray-300 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 font-mono text-sm"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
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
