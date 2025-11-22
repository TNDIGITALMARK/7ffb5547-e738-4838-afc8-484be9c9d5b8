'use client';

import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';
import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    preferredDate: '',
    timeSlot: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, this would send data to a backend
    console.log('Booking submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-16 px-6 lg:px-10">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-10 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your booking request. We&apos;ve received your information and will contact you
                within 24 hours to confirm your appointment and discuss next steps.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                A confirmation email has been sent to <strong>{formData.email}</strong>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[hsl(179,70%,36%)] text-white px-8 py-3 rounded-md font-medium hover:brightness-90 transition-all"
              >
                Book Another Session
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Book a Session</h1>
            <p className="text-xl text-gray-600">
              Ready to bring your vision to life? Fill out the form below and we&apos;ll get in touch to
              schedule your consultation.
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-md p-10 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full"
                >
                  <option value="">Select a project type</option>
                  <option value="essential">Essential Package ($500)</option>
                  <option value="professional">Professional Package ($1,200)</option>
                  <option value="premium">Premium Package ($2,500)</option>
                  <option value="custom">Custom Project (Contact for Quote)</option>
                </select>
              </div>

              {/* Scheduling */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Calendar size={16} />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block text-sm font-medium mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    required
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full"
                  >
                    <option value="">Select a time slot</option>
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM - 5:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Share your vision, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                <p className="text-sm text-gray-500">
                  * Required fields. We&apos;ll respond within 24 hours.
                </p>
                <button
                  type="submit"
                  className="bg-[hsl(179,70%,36%)] text-white px-12 py-4 rounded-md font-medium hover:brightness-90 transition-all w-full sm:w-auto"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-[hsl(179,70%,36%)] mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-gray-600">hello@creative-visions.com</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-[hsl(179,70%,36%)] mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-[hsl(179,70%,36%)] mb-3">
                <Calendar className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-semibold mb-1">Availability</h3>
              <p className="text-sm text-gray-600">Mon-Fri, 9 AM - 5 PM</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
