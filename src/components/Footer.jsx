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
            Let's Work Together
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
              className="glass-card p-8 glow-effect"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-primary-400 shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Envelope size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">Get In Touch</h3>
                  <p className="text-gray-400">Let's start a conversation</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:pandachinmay38@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary-400 transition-colors group"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: 0.1 }}
                >
                  <Envelope size={20} className="text-primary-400 group-hover:text-white transition-colors" />
                  <span className="text-lg">pandachinmay38@gmail.com</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-8 glow-effect"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-blue-400 shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Location size={20} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">Location</h3>
                  <p className="text-gray-400">Based in India</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Available for remote opportunities and open to relocation. 
                Let's discuss how we can work together across time zones.
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
              className="glass-card p-8 glow-effect"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                    variants={fadeUp3D}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.4 }}
                  />
                  <motion.input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                    variants={fadeUp3D}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.5 }}
                  />
                </div>
                <motion.input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.6 }}
                />
                <motion.textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all duration-300 resize-none"
                  variants={fadeUp3D}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.7 }}
                />
                <motion.button
                  type="submit"
                  className="btn-primary w-full py-3 text-lg font-semibold"
                  variants={hoverTilt}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: 0.8 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="glass-card p-8 glow-effect"
              variants={fadeUp3D}
              initial="hidden"
              whileInView="visible"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/Chinmaya2438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-primary-500/20 transition-all duration-300 group"
                  variants={hoverTilt}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: 0.5 }}
                >
                  <Github size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/chinmaya-panda-30a3ba3a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-primary-500/20 transition-all duration-300 group"
                  variants={hoverTilt}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="whileHover"
                  whileTap="whileTap"
                  transition={{ delay: 0.6 }}
                >
                  <Linkedin size={24} className="text-gray-300 group-hover:text-white transition-colors" />
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
            className="glass-card p-10 glow-effect border-glow-hover inline-block"
            variants={hoverTilt}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Let's Build the Future
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you need a scalable backend API, authentication system, or full-stack solution, 
              I'm ready to help you create robust and maintainable software.
            </p>
            <motion.a
              href="mailto:pandachinmay38@gmail.com"
              className="btn-primary inline-flex items-center gap-4 text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <motion.div
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Mail size={24} />
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
            className="w-24 h-1 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full mx-auto mt-4"
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
