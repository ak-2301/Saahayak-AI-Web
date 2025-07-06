import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar,',
    role: 'General Store Owner',
    quote: 'No more manual ledgers! KhataBook saves me hours every week. Highly recommended.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Boutique Owner',
    quote: 'KhataBook transformed my business! Tracking sales and customer dues is now so simple.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Ahmed Khan',
    role: 'Electronics Shop',
    quote: 'The bill storage feature is a lifesaver. Everything is organized and secure. Fantastic app!',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 mb-10 mt-10 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Shopkeepers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-500"
            />
            <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
            <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
            <span className="text-sm text-gray-500">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
