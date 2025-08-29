"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Message sent successfully!');
    setFormData({ fullName: '', email: '', message: '' });
  };


  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 ">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Content placeholders representing the gray bars in the design */}
          <div className="space-y-6 mb-12">
            <div className="bg-gray-600 bg-opacity-50 h-4 w-full max-w-2xl mx-auto rounded animate-pulse"></div>
            <div className="bg-gray-600 bg-opacity-50 h-4 w-3/4 max-w-xl mx-auto rounded animate-pulse"></div>
            <div className="bg-gray-600 bg-opacity-50 h-4 w-2/3 max-w-lg mx-auto rounded animate-pulse"></div>
          </div>

          {/* Join Discord Button */}
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            JOIN DISCORD
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">CONTACT US</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaMapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Address</h3>
                  <div className="text-gray-600">
                    <p>0000 xxxxx</p>
                    <p>xxxx, xxxx,</p>
                    <p>xxx</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
                  <p className="text-gray-600">123-4567-890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
                  <p className="text-gray-600">support@pixelnetwork.in.th</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Email</h3>

              <div className="space-y-6">
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:border-blue-600 outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:border-blue-600 outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Type your message
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-b-2 border-gray-400 bg-transparent focus:border-blue-600 outline-none transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
