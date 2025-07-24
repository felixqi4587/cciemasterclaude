'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline'

const SuccessStoriesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  // Success stories data (reusing from original website)
  const successStories = [
    {
      name: "Michael Rodriguez",
      role: "Senior Network Engineer → Network Architect",
      track: "CCIE Enterprise Infrastructure",
      months: 3.5,
      salary: "$35K",
      avatar: "MR",
      quote: "The structured approach and hands-on labs were game-changers for me. I went from struggling with complex routing scenarios to confidently designing enterprise networks."
    },
    {
      name: "Sarah Chen",
      role: "IT Support → Security Specialist",
      track: "CCIE Security", 
      months: 4,
      salary: "$45K",
      avatar: "SC",
      quote: "Coming from an IT support background, I thought CCIE was impossible. The personalized study plan and expert mentorship helped me build confidence."
    },
    {
      name: "David Johnson",
      role: "Network Admin → SP Network Engineer",
      track: "CCIE Service Provider",
      months: 3.8,
      salary: "$50K",
      avatar: "DJ",
      quote: "The practical labs were exactly what I needed. Working with real service provider scenarios prepared me perfectly for both the exam and my new role."
    },
    {
      name: "Amanda Lee",
      role: "Telecom Engineer → DevOps Engineer", 
      track: "DevNet Expert",
      months: 3.8,
      salary: "$60K",
      avatar: "AL",
      quote: "The DevNet track opened doors I never imagined. From telecom engineering to automation and DevOps for major enterprises."
    },
    {
      name: "Robert Thompson",
      role: "Junior Engineer → Technical Lead",
      track: "CCIE Enterprise Infrastructure",
      months: 3.3,
      salary: "$42K",
      avatar: "RT",
      quote: "Starting as a junior engineer, I felt overwhelmed by the CCIE complexity. The step-by-step curriculum built my confidence gradually."
    },
    {
      name: "Lisa Martinez",
      role: "System Admin → Security Architect",
      track: "CCIE Security",
      months: 3.9,
      salary: "$55K",
      avatar: "LM",
      quote: "Transitioning from system administration to security seemed daunting. The comprehensive curriculum prepared me perfectly."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(successStories.length / 2))
    }, 5000)

    return () => clearInterval(timer)
  }, [successStories.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(successStories.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(successStories.length / 2) - 1 : prev - 1
    )
  }

  return (
    <section id="success" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
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
            Real Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our students transformed their careers and achieved CCIE certification success. 
            These are real stories from real professionals who trusted us with their journey.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: '95%', label: 'Pass Rate', icon: '🏆' },
            { number: '10,000+', label: 'Students Trained', icon: '👥' },
            { number: '4', label: 'Months Average', icon: '📅' },
            { number: '40%', label: 'Salary Increase', icon: '💰' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Success Stories Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {Array.from({ length: Math.ceil(successStories.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
                    {successStories.slice(slideIndex * 2, slideIndex * 2 + 2).map((story, storyIndex) => (
                      <motion.div
                        key={storyIndex}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: storyIndex * 0.1 }}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg border border-gray-100"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                              {story.avatar}
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">{story.name}</h3>
                              <p className="text-sm text-gray-600">{story.role}</p>
                            </div>
                          </div>
                          <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {story.track}
                          </div>
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                          &ldquo;{story.quote}&rdquo;
                        </blockquote>

                        {/* Results */}
                        <div className="flex justify-between items-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600">{story.months}</div>
                            <div className="text-xs text-gray-600">Months to Pass</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{story.salary}</div>
                            <div className="text-xs text-gray-600">Salary Increase</div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </motion.button>

            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(successStories.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStoriesSection