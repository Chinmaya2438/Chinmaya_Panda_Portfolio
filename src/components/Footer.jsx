/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaMailBulk as Mail, FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Envelope, FaMapMarkerAlt as Location, FaPhone as Phone } from 'react-icons/fa'
import { fadeUp3D, hoverTilt, staggerContainer, sectionReveal } from '../utils/animations';

const Footer = () => {
  return (
    <motion.footer 
      id="footer" 
      className="py-24 bg-gradient-to-br from-background-950 via-background-900 to-background-950 border-t border-white/10"
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
            ~/contact $ <span className="text-primary-400 animate-blink">_</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            variants={fadeUp3D}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
          >
            Ready to build something amazing? Let's connect and discuss how I can help bring your ideas to life with robust backend solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="ide-card p-8"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-editor-border pb-4">
                <motion.div
                  className="w-10 h-10 bg-editor-bg border border-editor-border rounded flex items-center justify-center text-primary-400 shadow-neon-green"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Envelope size={20} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">system.contact()</h3>
                  <p className="text-gray-400 font-mono text-sm mt-1">Initialize communication protocols</p>
                </div>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <motion.a
                  href="mailto:pandachinmay38@gmail.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-primary-400 transition-colors group"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: 0.1 }}
                >
                  <span className="text-accent-magenta">email:</span>
                  <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-accent-amber">"pandachinmay38@gmail.com"</span>
                </motion.a>

                <motion.a
                  href="tel:9040575001"
                  className="flex items-center gap-4 text-gray-400 hover:text-primary-400 transition-colors group"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: 0.15 }}
                >
                  <span className="text-accent-magenta">phone:</span>
                  <span className="text-accent-cyan">9040575001</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="ide-card p-8"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6 border-b border-editor-border pb-4">
                <motion.div
                  className="w-10 h-10 bg-editor-bg border border-editor-border rounded flex items-center justify-center text-primary-400 shadow-neon-green"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Location size={20} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">system.location()</h3>
                  <p className="text-gray-400 font-mono text-sm mt-1">Current coordinates</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-mono text-sm">
                <span className="text-accent-magenta">region:</span> <span className="text-accent-amber">"Odisha, India"</span><br />
                <span className="text-accent-magenta">zipcode:</span> <span className="text-accent-cyan">766014</span><br />
                <span className="text-accent-magenta">status:</span> <span className="text-primary-500">"Available for remote"</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form & Social Links */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Contact Form */}
            <motion.div
              className="ide-card p-8"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-primary-400 mb-6 font-mono border-b border-editor-border pb-4">POST /api/messages</h3>
              <form className="space-y-6 font-mono text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.input
                    type="text"
                    placeholder="req.body.name"
                    className="w-full px-4 py-3 bg-editor-bg border border-editor-border rounded text-white placeholder-gray-600 focus:outline-none focus:border-primary-400 transition-all duration-300"
                    variants={fadeUp3D}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.4 }}
                  />
                  <motion.input
                    type="email"
                    placeholder="req.body.email"
                    className="w-full px-4 py-3 bg-editor-bg border border-editor-border rounded text-white placeholder-gray-600 focus:outline-none focus:border-primary-400 transition-all duration-300"
                    variants={fadeUp3D}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.5 }}
                  />
                </div>
                <motion.input
                  type="text"
                  placeholder="req.body.subject"
                  className="w-full px-4 py-3 bg-editor-bg border border-editor-border rounded text-white placeholder-gray-600 focus:outline-none focus:border-primary-400 transition-all duration-300"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.6 }}
                />
                <motion.textarea
                  placeholder="req.body.message"
                  rows="5"
                  className="w-full px-4 py-3 bg-editor-bg border border-editor-border rounded text-white placeholder-gray-600 focus:outline-none focus:border-primary-400 transition-all duration-300 resize-none"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.7 }}
                />
                <motion.button
                  type="submit"
                  className="btn-primary w-full py-3 text-sm font-bold flex items-center justify-center font-mono"
                  variants={hoverTilt}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: 0.8 }}
                >
                  {`{`}"status": "SEND_REQUEST"{`}`}
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="ide-card p-8"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-primary-400 mb-6 font-mono border-b border-editor-border pb-4">Network Activity</h3>
              <div className="flex justify-start space-x-6">
                <motion.a
                  href="https://github.com/Chinmaya2438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-editor-bg border border-editor-border hover:border-primary-400 rounded hover:bg-primary-500/10 transition-all duration-300 group"
                  variants={hoverTilt}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: 0.5 }}
                >
                  <Github size={20} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/chinmaya-panda-30a3ba3a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-editor-bg border border-editor-border hover:border-primary-400 rounded hover:bg-primary-500/10 transition-all duration-300 group"
                  variants={hoverTilt}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: 0.6 }}
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="mt-20 text-center"
          variants={fadeUp3D}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="ide-card p-10 inline-block text-left"
            variants={hoverTilt}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <div className="text-3xl font-bold text-gray-100 font-mono mb-4">
              Deploy the future.
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
              <span className="text-accent-magenta">function</span> <span className="text-accent-cyan">collaborate</span>() {'{'} <br/>
              &nbsp;&nbsp;<span className="text-accent-magenta">return</span> <span className="text-accent-amber">"Ready to create robust APIs and scalable database architectures."</span>;<br/>
              {'}'}
            </p>
            <motion.a
              href="mailto:pandachinmay38@gmail.com"
              className="btn-primary inline-flex items-center justify-center gap-4 px-8 py-3 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-sm">Execute mailto:</span>
              <motion.div
                className="w-6 h-6 flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Mail size={20} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/10 text-center"
          variants={fadeUp3D}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Chinmaya Panda. Crafted with React, Tailwind CSS, and Framer Motion.
          </p>
          <motion.div
            className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </motion.footer>
  )
}

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Chinmaya2438"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/chinmaya-panda-30a3ba3a6/"
  }
]

export default Footer
