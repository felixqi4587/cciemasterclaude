'use client'

import { motion } from 'framer-motion'

const CtaSection = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Ready to Start Your 456 Journey?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-12 opacity-90"
        >
          Join thousands of IT professionals who transformed their careers with 456Lab
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="https://wa.me/16034861896?text=Hi! I want to start my 456Lab journey. Please send me more information about your training programs." 
            className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all pulse-glow inline-flex items-center justify-center"
          >
            <span className="mr-2">💬</span>
            WhatsApp: +1 (603) 486-1896
          </a>
          <a 
            href="mailto:hello@456lab.com?subject=456Lab Training Information Request&body=Hi! I'm interested in your 4-month training programs. Please send me more information about courses, pricing, and enrollment." 
            className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center"
          >
            <span className="mr-2">📧</span>
            hello@456lab.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center opacity-75"
        >
          <p className="text-sm">
            🔒 Your information is secure • 💯 No spam guarantee • ⚡ Quick response within 3 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection