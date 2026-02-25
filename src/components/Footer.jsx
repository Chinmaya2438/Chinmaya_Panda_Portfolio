/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { FaMailBulk as Mail, FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.footer 
      id="footer" 
      className="py-16 bg-background-950 border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-8">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <motion.div
              className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail size={24} className="text-primary-400" />
                <span className="text-lg font-semibold">Email</span>
              </div>
              <a
                href="mailto:pandachinmay38@gmail.com"
                className="text-gray-300 hover:text-primary-400 transition-colors text-lg"
              >
                pandachinmay38@gmail.com
              </a>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Linkedin size={24} className="text-primary-400" />
                <span className="text-lg font-semibold">LinkedIn</span>
              </div>
              <a
                href="https://www.linkedin.com/in/chinmaya-panda-30a3ba3a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors text-lg"
              >
                Connect with me
              </a>
            </motion.div>

            {/* GitHub */}
            <motion.div
              className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Github size={24} className="text-primary-400" />
                <span className="text-lg font-semibold">GitHub</span>
              </div>
              <a
                href="https://github.com/Chinmaya2438"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors text-lg"
              >
                View my projects
              </a>
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-gray-400 mb-6">Let's discuss your next project</p>
            <motion.a
              href="mailto:pandachinmay38@gmail.com"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <Mail size={20} />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-gray-500">
              © {new Date().getFullYear()} Chinmaya Panda. Built with React & Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
