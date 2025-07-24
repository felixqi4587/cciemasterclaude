'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="gradient-bg text-white min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          456Lab
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold mb-8"
        >
          4-Month Training, 5-Star Support, 6-Figure Salary
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90"
        >
          Transform your IT career with professional certification training. 
          CCIE • Red Hat • Juniper • Cloud Certifications
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a 
            href="https://wa.me/16034861896?text=Hi! I want to learn more about 456Lab training programs." 
            className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all pulse-glow"
          >
            💬 WhatsApp Consultation
          </a>
          <a 
            href="mailto:hello@456lab.com?subject=456Lab Training Inquiry" 
            className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            📧 Email Inquiry
          </a>
        </motion.div>

        {/* 456 Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              number: "4",
              title: "Month Training",
              description: "Intensive, focused certification program with hands-on labs and real-world scenarios"
            },
            {
              number: "5",
              title: "Star Support", 
              description: "8 hours daily expert support, one-on-one mentorship, and dedicated instructor access"
            },
            {
              number: "6",
              title: "Figure Salary",
              description: "$100K+ annual salary potential with industry-recognized certifications and skills"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="text-5xl font-bold mb-4">{item.number}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="opacity-90">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection