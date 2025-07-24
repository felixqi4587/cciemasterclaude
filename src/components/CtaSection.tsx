'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { 
  RocketLaunchIcon, 
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const CtaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Countdown timer for urgency
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7) // 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })

      if (distance < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    'Real CCIE exam questions and lab scenarios',
    '360 hours of hands-on practice over 4 months',
    '8 hours daily instructor availability',
    'Service extension if exam blueprint changes',
    'Money-back guarantee if not satisfied',
    'Direct WhatsApp support line'
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto">
            Join thousands of professionals who have achieved their CCIE certification 
            and advanced their careers with our proven training system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits and urgency */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-6 text-center">
                <div className="text-sm font-semibold mb-2">🔥 Limited Time Offer Ends In:</div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Mins', value: timeLeft.minutes },
                    { label: 'Secs', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/20 rounded-lg p-2">
                      <div className="text-xl font-bold">{item.value.toString().padStart(2, '0')}</div>
                      <div className="text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form and actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Primary CTA */}
            <motion.a
              href="https://wa.me/16034861896?text=Hi! I'm interested in CCIE training. Can you provide more information about your 4-month service program?"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 pulse-glow"
            >
              <span className="flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-8 w-8 mr-3" />
                Start WhatsApp Chat Now
              </span>
              <span className="text-sm font-normal block mt-1">
                Get instant response • Available 24/7
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="mailto:cciemasternode@gmail.com?subject=CCIE Training Inquiry&body=Hi! I'm interested in your CCIE training program. Please send me more information about:"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-white text-primary-700 text-center py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                <PhoneIcon className="h-6 w-6 mr-2" />
                Send Email Inquiry
              </span>
            </motion.a>

            {/* Contact Info */}
            <div className="glass rounded-xl p-6 text-white text-center">
              <div className="text-sm text-blue-100 mb-2">Direct Contact</div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">+1 (603) 486-1896</span>
                </div>
                <div className="flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">cciemasternode@gmail.com</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-blue-200">
                Our team will contact you within 3 hours to discuss your training goals.
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex justify-center items-center space-x-6 text-blue-200 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>No Spam</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection