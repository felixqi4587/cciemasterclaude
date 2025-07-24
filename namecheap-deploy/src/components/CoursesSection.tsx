'use client'

import { motion } from 'framer-motion'

const CoursesSection = () => {
  const courses = [
    {
      title: "CCIE Enterprise",
      description: "Expert-level enterprise infrastructure certification. Average salary: $120K-$180K",
      price: "$2,999",
      originalPrice: "$4,999",
      gradient: "from-blue-50 to-indigo-100"
    },
    {
      title: "Red Hat Certified",
      description: "Linux system administration and cloud expertise. Average salary: $90K-$140K",
      price: "$1,999",
      originalPrice: "$3,499",
      gradient: "from-red-50 to-pink-100"
    },
    {
      title: "Juniper Networks",
      description: "Service provider and enterprise networking. Average salary: $110K-$160K",
      price: "$2,499",
      originalPrice: "$3,999",
      gradient: "from-green-50 to-emerald-100"
    },
    {
      title: "Cloud Certifications",
      description: "AWS, Azure, GCP professional level. Average salary: $130K-$200K",
      price: "$2,299",
      originalPrice: "$3,799",
      gradient: "from-purple-50 to-violet-100"
    },
    {
      title: "CCIE Security",
      description: "Advanced cybersecurity and network protection. Average salary: $140K-$220K",
      price: "$3,499",
      originalPrice: "$5,499",
      gradient: "from-orange-50 to-amber-100"
    },
    {
      title: "DevOps Expert",
      description: "Automation and infrastructure as code. Average salary: $120K-$180K",
      price: "$2,799",
      originalPrice: "$4,299",
      gradient: "from-teal-50 to-cyan-100"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional IT Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the most in-demand IT certifications with expert guidance and hands-on experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${course.gradient} rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <div className="text-3xl font-bold text-primary-600 mb-2">{course.price}</div>
              <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection