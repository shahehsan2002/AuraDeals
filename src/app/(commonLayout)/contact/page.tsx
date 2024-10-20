'use client';
import Image from "next/image";
import { FC, useState } from "react";
// import "animate.css";

const ContactUs: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // Reset after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you! Whether you have a question, need support, or just want to say hello, feel free to reach out to us.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Contact Information Section */}
          <div className="max-w-lg mx-auto mb-16 animate__animated animate__fadeIn animate__delay-2s">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Office</h2>
            <div className="flex items-center mb-4">
              <Image
                src="https://via.placeholder.com/40"
                alt="Location Icon"
                width={40}
                height={40}
                className="mr-4"
              />
              <p className="text-gray-700 text-lg">1234 Main Street, Suite 100, City, Country</p>
            </div>
            <div className="flex items-center mb-4">
              <Image
                src="https://via.placeholder.com/40"
                alt="Phone Icon"
                width={40}
                height={40}
                className="mr-4"
              />
              <p className="text-gray-700 text-lg">(123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <Image
                src="https://via.placeholder.com/40"
                alt="Email Icon"
                width={40}
                height={40}
                className="mr-4"
              />
              <p className="text-gray-700 text-lg">contact@domain.com</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-lg mx-auto mb-16 animate__animated animate__fadeIn animate__delay-3s">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-6 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-6 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transform transition duration-300"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="mt-6 text-green-600 font-semibold text-center animate__animated animate__fadeIn animate__delay-4s">
                  <p>Thank you for your message! We will get back to you shortly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
