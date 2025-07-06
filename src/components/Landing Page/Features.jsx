import React from 'react'
import { FaCheckCircle, FaClock, FaChartBar, FaBolt, FaLightbulb, FaBookOpen } from 'react-icons/fa';

const features = [
  { title: "Track Sales Effortlessly", description: "Monitor daily, monthly, and yearly sales with intuitive dashboards. Gain insights into your business performance.", icon: <FaCheckCircle className="text-blue-500" />, bgColor: "bg-blue-100" },
  { title: "Detailed Customer Records", description: "Keep all customer information organized. Access purchase history and contact details instantly.", icon: <FaClock className="text-green-500" />, bgColor: "bg-green-100" },
  { title: "Secure Bill Storage", description: "Upload and store all your bills digitally. Reduce clutter and ensure easy access anytime, anywhere.", icon: <FaChartBar className="text-purple-500" />, bgColor: "bg-purple-100" },
  { title: "Quick Apply", description: "Apply to multiple jobs with a single click using your optimized profile and resume.", icon: <FaBolt className="text-red-500" />, bgColor: "bg-red-100" },
  { title: "View Outstanding Balances", description: "Quickly see who owes you money. Send reminders and manage receivables efficiently.", icon: <FaLightbulb className="text-yellow-500" />, bgColor: "bg-yellow-100" },
  { title: "Print Invoices & Reports", description: "Generate and print professional invoices and sales reports for daily transactions with ease", icon: <FaBookOpen className="text-indigo-500" />, bgColor: "bg-indigo-100" },
];

const Features = () => {
  return (
     <div className="bg-white text-gray-800 py-20">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#393d47]">
                Why Choose Our Platform
              </h2>
              <p className="text-[#74757c] text-center mb-12">
                Discover the features that make our portal stand out
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex items-start">
                {features.map((feature, index) => (
                  <div key={index} className="p-6 rounded-lg text-center shadow-lg">
                    <div className={`${feature.bgColor} w-16 h-12 rounded-lg flex items-center justify-center mr-2 mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#393d47] mb-3 text-left">
                      {feature.title}
                    </h3>
                    <p className="text-[#74757c] text-left">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  )
}

export default Features