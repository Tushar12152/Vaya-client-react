import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-20 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-gray-600 text-lg">
            We are here to assist you. Please fill out the form below or reach us through the contact details.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Contact Info Section */}
          <div className="flex-1 bg-white p-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Details</h2>
            <ul className="space-y-6">
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-gray-500 mr-4"></i>
                <span className="text-gray-700">+0123 456 789</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-gray-500 mr-4"></i>
                <span className="text-gray-700">email@companyname.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-gray-500 mr-4"></i>
                <span className="text-gray-700">Mon - Fri: 8am - 5pm</span>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1 bg-white p-10 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-slate-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Office Locations Section */}
        <div className="bg-white p-10 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Office Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Australia', 'India', 'United States'].map((location, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-md shadow hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{location}</h3>
                <p className="text-gray-600">123 Street, City, State</p>
                <p className="text-gray-600">email@companyname.com</p>
                <p className="text-gray-600">Mon - Fri: 8am - 5pm</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white p-10 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest updates and offers.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full max-w-md p-4 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
            />
            <button className="bg-slate-600 text-white px-6 rounded-r-md hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
