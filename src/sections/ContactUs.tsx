// components/ContactUs.js
"use client"

import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-500 mb-8">
        Feel free to contact us! Submit your queries here, and we will listen.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact options */}
        <div className="space-y-4">
          <div className="bg-blue-600 text-white rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xl">📞</span>
              <p className="text-lg">Call Us Directly At</p>
            </div>
            <p className="text-3xl font-bold mb-4">470-601-1911</p>
            <button className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Contact Us
            </button>
          </div>

          <div className="bg-gray-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xl">💬</span>
              <p className="text-lg">Chat With Our Team</p>
            </div>
            <p className="text-xl font-bold mb-4">email@pagedone.com</p>
            <button className="bg-gray-400 hover:bg-gray-300 text-white py-2 px-4 rounded-full">
              Contact Us
            </button>
          </div>
        </div>

        {/* Contact form */}
        <div className="col-span-2">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message Here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 h-32"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
