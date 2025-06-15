"use client";
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! ✅');
    console.log(formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="bg-[#0B0B17] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm sm:text-base text-gray-300 mb-8">
          Please read our
          <a href="/supportfaq" className="text-[#8C7CF0] underline underline-offset-2 hover:text-[#A798F4]">
            faq page
          </a>
          first. If you have any questions, don’t hesitate to send us a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-[#8C7CF0] text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-[#8C7CF0] text-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-[#8C7CF0] text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div className="w-full md:w-1/2">
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={10}
                placeholder="Your Message"
                required
                className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-md focus:outline-none focus:border-[#8C7CF0] text-sm resize-none"
              ></textarea>
            </div>
          </div>

          <div className="text-center md:text-left">
            <button
              type="submit"
              className="bg-[#8C7CF0] text-white px-8 py-3 rounded-md hover:bg-[#7b6ad6] transition text-sm sm:text-base"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
