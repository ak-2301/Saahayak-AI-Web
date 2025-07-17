import React from 'react'
import heroImage from '../../assets/teacher.jpeg';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        // <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center justify-center py-40">
        //     <div className="container mx-auto px-4 md:px-8">
        //         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        //             {/* Left Section */}
        //             <div className="space-y-6">
        //                 <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        //                     Saahayak:
        //                     <span className="text-blue-500"> Your AI Teaching Assistant</span>
        //                     <p className='text-white-200'>Streamline lesson planning and delivery with AI-powered roadmaps and insightful feedback.</p>
        //                 </h1>
        //                 <div className="flex space-x-4">
        //                     <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
        //                         <Link to="/jobs">Explore Features</Link>
        //                     </button>
        //                     <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg">
        //                         <Link to="/ats">Get started</Link>
        //                     </button>
        //                 </div>
        //             </div>

        //             {/* Right Section */}
        //             <div className="relative rounded-xl overflow-hidden shadow-xl">
        //                 <img
        //                     src={heroImage}// Replace with your actual image path
        //                     alt="Shopkeeper sitting in modern shop"
        //                     className="w-full h-full object-cover rounded-xl"
        //                 />

        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/classroom-bg.jpg')` }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Saahayak:<span className='text-blue-500'>Your AI <br /> Teaching Assistant</span> 
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Streamline lesson planning and delivery with AI-powered roadmaps and insightful feedback.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
              Explore Features
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-lg shadow">
              Get Started
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={heroImage}
            alt="Teacher in classroom"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    )
}

export default Hero