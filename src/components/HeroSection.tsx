'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  AcademicCapIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  TrophyIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const HeroSection = () => {
  const [currentMonth, setCurrentMonth] = useState('')
  const [discount, setDiscount] = useState(35)
  const [savings, setSavings] = useState(1400)

  useEffect(() => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    const monthIndex = new Date().getMonth()
    setCurrentMonth(months[monthIndex])

    // Dynamic discount based on month (reusing original logic)
    const discounts = [35, 33, 37, 35, 34, 36, 39, 38, 35, 41, 45, 40]
    const savingsAmounts = [1400, 1320, 1480, 1400, 1360, 1440, 1560, 1520, 1400, 1640, 1800, 1600]
    
    setDiscount(discounts[monthIndex])
    setSavings(savingsAmounts[monthIndex])
  }, [])

  const features = [
    {
      icon: ClockIcon,
      text: '4-Month Service Period',
      highlight: true
    },
    {
      icon: UserGroupIcon,
      text: '8 Hours Daily Support',
      highlight: false
    },
    {
      icon: TrophyIcon,
      text: '95% Pass Rate',
      highlight: true
    },
    {
      icon: ShieldCheckIcon,
      text: 'Real Exam Questions',
      highlight: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Special Offer Banner */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <span className="mr-2">🔥</span>
            {currentMonth} Special: Save {discount}% (${savings.toLocaleString()}) - Limited Time!
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Pass Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">CCIE</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-6xl">First Try Guaranteed</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your IT career with our advanced 4-month CCIE training program. 
            Real exam questions, 8 hours daily support, and a 95% success rate.
          </motion.p>

          {/* Feature Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`glass rounded-lg p-4 text-center ${
                  feature.highlight ? 'ring-2 ring-yellow-300' : ''
                }`}
              >
                <feature.icon className="h-8 w-8 text-white mx-auto mb-2" />
                <p className="text-white font-semibold text-sm lg:text-base">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 pulse-glow"
            >
              <span className="flex items-center">
                <AcademicCapIcon className="h-6 w-6 mr-2" />
                Start Your Journey Now
              </span>
            </motion.a>

            <motion.a
              href="#success"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              View Success Stories
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 text-white/80"
          >
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-sm">10,000+ Students Trained</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-sm">95% First-Try Pass Rate</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-sm">Money-Back Guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection