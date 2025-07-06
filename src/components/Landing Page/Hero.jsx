import React from 'react'
import heroImage from '../../assets/price.jpeg';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center justify-center py-40">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    {/* Left Section */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            KhataBook:
                            <span className="text-blue-500">Your Digital Ledger for Smart Business</span>
                        </h1>
                        <div className="flex space-x-4">
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                <Link to="/jobs">Find Jobs</Link>
                            </button>
                            <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg">
                                <Link to="/ats">Check ATS Score</Link>
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <img
                            src={heroImage}// Replace with your actual image path
                            alt="Shopkeeper sitting in modern shop"
                            className="w-full h-full object-cover rounded-xl"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero