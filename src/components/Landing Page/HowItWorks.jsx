import React from "react";
import work from '../../assets/work.jpeg';

const HowItWorks = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How it Works
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Sign Up & Set Up Your Shop
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Create your account in minutes. Easily configure your shop
                  details and preferences.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Add Transactions & Customers
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Log sales, expenses, and customer details. Keep track of
                  every interaction.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Generate Reports & Insights
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Access comprehensive reports on sales, outstanding balances,
                  and more. Make informed decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={work}// Replace with your image path
              alt="Shop operations"
              className="w-full rounded-xl object-cover shadow-lg"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
