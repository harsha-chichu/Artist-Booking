'use client'
import React from 'react';


import { Paintbrush, User, Brush, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: <Paintbrush className="text-pink-600" />,
    title: "Live Event Paintings",
    desc: "Capture the magic of your wedding, party, or special day in real-time with on-the-spot painting."
  },
  {
    icon: <User className="text-pink-600" />,
    title: "Custom Portraits",
    desc: "Handcrafted portraits tailored to your vision — perfect for gifts or personal keepsakes."
  },
  {
    icon: <Brush className="text-pink-600" />,
    title: "Wall Murals",
    desc: "Transform your space with large-scale wall art, customized to match your style and space."
  },
  {
    icon: <GraduationCap className="text-pink-600" />,
    title: "Art Workshops",
    desc: "Interactive sessions for all ages to explore creativity and learn new artistic skills."
  }
]

export default function Services() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 bg-white text-center max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">
              {React.cloneElement(service.icon, {
                size: 36, // smaller on mobile by default
                className: "text-pink-600"
              })}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
