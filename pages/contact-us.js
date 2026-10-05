import { useState } from 'react';
import Head from 'next/head';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end state handling
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us - GatewayMoon</title>
        <meta name="description" content="Get in touch with the GatewayMoon team for support, inquiries, or feedback." />
      </Head>
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-8">
          Have questions, feedback, or need assistance? Reach out to us using the form below and our team will get back to you.
        </p>

        <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
          {submitted ? (
            <div className="p-4 bg-green-50 text-green-800 rounded-lg text-center font-medium">
              Thank you for reaching out! We have received your message and will respond shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className="btn-blue w-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;