'use client'

import { motion } from 'framer-motion'

const WhyChooseSection = () => {
  const features = [
    {
      number: "4",
      title: "4-Month Intensive Program",
      description: "Not a 2-year course. Focused, intensive training that gets you certified fast while you keep your current job."
    },
    {
      number: "5", 
      title: "5-Star Expert Support",
      description: "8 hours daily access to certified experts. Real instructors, not chatbots. One-on-one mentorship included."
    },
    {
      number: "6",
      title: "6-Figure Salary Potential", 
      description: "Our graduates average $45K salary increase within 6 months. Many reach $120K+ in their first year."
    }
  ]

  const stats = [
    { label: "Pass Rate", value: "95%", color: "text-green-600" },
    { label: "Average Salary Increase", value: "$45K", color: "text-primary-600" },
    { label: "Students Trained", value: "10,000+", color: "text-purple-600" },
    { label: "Job Placement Rate", value: "88%", color: "text-orange-600" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose 456Lab?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {feature.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Stats</h3>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{stat.label}</span>
                  <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection