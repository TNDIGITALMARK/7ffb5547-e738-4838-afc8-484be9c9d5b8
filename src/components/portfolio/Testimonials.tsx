import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechCorp',
    image: '/generated/testimonial-2.jpg',
    quote: 'Simply exceptional work!',
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    company: 'Design Studio',
    image: '/generated/testimonial-1.jpg',
    quote: 'Truly captured our vision!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-10 lg:p-16">
          <h2 className="text-3xl font-semibold mb-12 text-center">Client Testimonials</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 flex items-start gap-4"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-gray-600 mb-3 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="font-semibold text-sm">- {testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Ready to Create?</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service
                </label>
                <select id="service" name="service" className="w-full">
                  <option>Select a service</option>
                  <option>Essential Package</option>
                  <option>Professional Package</option>
                  <option>Premium Package</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="bg-[hsl(179,70%,36%)] text-white px-8 py-3 rounded-md font-medium text-sm hover:brightness-90 transition-all w-full md:w-auto"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
