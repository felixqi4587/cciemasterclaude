'use client'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🎯</span>
              <span className="text-xl font-bold">456Lab</span>
            </div>
            <p className="text-gray-300 mb-4">
              4-Month Training, 5-Star Support, 6-Figure Salary
            </p>
            <p className="text-gray-400 text-sm">
              Professional IT certification training with proven results.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Training Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>CCIE Enterprise Infrastructure</li>
              <li>CCIE Security</li>
              <li>Red Hat Certified Engineer</li>
              <li>Juniper Networks</li>
              <li>Cloud Certifications (AWS/Azure)</li>
              <li>DevOps & Automation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@456lab.com</p>
              <p>💬 +1 (603) 486-1896</p>
              <p>🌐 456lab.com</p>
              <p>⏰ Available 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 456Lab. All rights reserved. Transform your IT career in 4 months.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer