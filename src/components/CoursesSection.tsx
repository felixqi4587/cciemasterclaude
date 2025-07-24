'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  CheckIcon, 
  StarIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import { courseData, calculatePrice } from '@/lib/pricing'

const CoursesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="courses" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your CCIE/CCDE Track
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            4-month dedicated service programs providing real exam questions and direct assistance. 
            We help you pass CCIE/CCDE certifications with actual test materials, 
            lab scenarios, and continuous support throughout your preparation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {courseData.map((course, index) => {
            const pricing = calculatePrice(course.key)
            const isPopular = course.badge === 'Most Popular'
            
            return (
              <motion.div
                key={course.key}
                variants={cardVariants}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl card-hover ${
                  isPopular ? 'ring-2 ring-accent-500' : ''
                }`}
                onMouseEnter={() => setSelectedCourse(course.key)}
                onMouseLeave={() => setSelectedCourse(null)}
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${course.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}>
                  {course.badge}
                </div>

                {/* Header */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{course.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <p className="text-blue-100 mb-4">{course.subtitle}</p>
                    
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span>4-Month Service</span>
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="h-4 w-4 mr-1" />
                        <span>8hr/day Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {course.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {selectedCourse === course.key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-3"
                      >
                        {course.features.slice(4).map((feature, featureIndex) => (
                          <div key={featureIndex + 4} className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-gray-900">
                          ${pricing.discountedPrice.toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          ${pricing.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Save</div>
                        <div className="text-lg font-bold text-green-600">
                          {pricing.discountPercent}%
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">One-time payment</div>
                    
                    <div className="bg-green-100 border border-green-200 rounded-lg p-3">
                      <div className="text-xs text-green-700 mb-1">
                        {pricing.promotion.holidayName} Special
                      </div>
                      <div className="text-sm font-semibold text-green-800">
                        Save ${pricing.savings.toLocaleString()} ({pricing.discountPercent}% OFF)
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-lift"
                  >
                    <span className="flex items-center justify-center">
                      <AcademicCapIcon className="h-5 w-5 mr-2" />
                      Start Learning Now
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Not sure which track is right for you? Get personalized guidance from our experts.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            <StarIcon className="h-5 w-5 mr-2" />
            Get Expert Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CoursesSection