import React from "react";
import contactUs from '../../assets/hop.jpeg';
import { Hop } from "lucide-react";

const ContactUs = () => {
  return (
    <section className=" text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-gray-800 p-8 rounded-xl shadow-md space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="your@example.com"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-black text-xl font-semibold mb-2">Reach Out to Us</h3>
              <p className="text-gray-400 text-sm mb-4">
                Have questions or need support? Our team is here to help you succeed.
              </p>
              <p className="text-sm text-black">
                Email:{" "}
                <a href="mailto:support@khatabook.com" className="text-blue-400 underline">
                  support@khatabook.com
                </a>
              </p>
              <p className="text-sm text-black">
                Phone:{" "}
                <a href="tel:+1234567890" className="text-blue-400 underline">
                  +1 (234) 567-890
                </a>
              </p>
            </div>

            {/* Side Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={contactUs}// Replace with actual image path
                alt="Shoprite"
                className="rounded-lg shadow-md object-cover w-full h-32"
              />
              <img
                src={contactUs} // Replace with actual image path
                alt="Tailor's Shop"
                className="rounded-lg shadow-md object-cover w-full h-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
