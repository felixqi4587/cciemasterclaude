'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const stats = [
    {
      number: 95,
      suffix: '%',
      label: 'Pass Rate',
      description: 'First-try success rate',
      icon: '🏆'
    },
    {
      number: 10000,
      suffix: '+',
      label: 'Students Trained',
      description: 'Successful CCIE professionals',
      icon: '👥'
    },
    {
      number: 4,
      suffix: '',
      label: 'Months Average',
      description: 'Average completion time',
      icon: '📅'
    },
    {
      number: 360,
      suffix: '',
      label: 'Lab Hours',
      description: 'Hands-on practice time',
      icon: '⚡'
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of IT professionals who have transformed their careers with our proven CCIE training system.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      delay={index * 0.2}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-lg font-semibold text-primary-600 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Money-Back Guarantee</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">24/7 Support Available</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Real Exam Questions</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">Service Extension Policy</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection