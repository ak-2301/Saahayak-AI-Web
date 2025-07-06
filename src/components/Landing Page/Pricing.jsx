import React from "react";

const Pricing = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Choose Your Plan</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img
              src="/images/basic-plan.jpg"
              alt="Basic Plan"
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-500"
            />
            <h3 className="text-2xl font-semibold mb-2">Basic Plan</h3>
            <p className="text-3xl font-bold text-blue-500 mb-4">Free</p>
            <ul className="space-y-2 text-sm text-left text-gray-300 mb-6">
              <li>✅ Daily Sales Tracking</li>
              <li>✅ Limited Customer Records</li>
              <li>✅ Basic Support</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
              Start Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gray-900 rounded-xl shadow-xl p-6 flex flex-col items-center border-2 border-blue-500">
            <span className="absolute -top-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-medium">
              Recommended
            </span>
            <img
              src="/images/pro-plan.jpg"
              alt="Pro Plan"
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-500"
            />
            <h3 className="text-2xl font-semibold mb-2">Pro Plan</h3>
            <p className="text-3xl font-bold text-blue-500 mb-1">$9<span className="text-base font-normal">/month</span></p>
            <p className="text-gray-400 text-sm mb-4">Billed Annually</p>
            <ul className="space-y-2 text-sm text-left text-gray-300 mb-6">
              <li>✅ All Basic Features</li>
              <li>✅ Unlimited Customer Records</li>
              <li>✅ Secure Bill Storage</li>
              <li>✅ Invoice & Report Printing</li>
              <li>✅ Priority Support</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
              Choose Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img
              src="/images/enterprise-plan.jpg"
              alt="Enterprise Plan"
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-500"
            />
            <h3 className="text-2xl font-semibold mb-2">Enterprise Plan</h3>
            <p className="text-3xl font-bold text-blue-500 mb-4">Custom</p>
            <ul className="space-y-2 text-sm text-left text-gray-300 mb-6">
              <li>✅ All Pro Features</li>
              <li>✅ Dedicated Account Manager</li>
              <li>✅ Custom Integrations</li>
              <li>✅ Advanced Security Features</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
