import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';
import Link from 'next/link';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Essential Package',
    price: '$500',
    timeline: 'Two-week turnaround',
    description: 'Perfect for individuals and small projects',
    features: [
      'Initial consultation session (1 hour)',
      'Up to 3 concept iterations',
      '10 high-resolution final images',
      'Basic retouching included',
      'Digital delivery via cloud',
      'Email support',
    ],
  },
  {
    name: 'Professional Package',
    price: '$1,200',
    timeline: 'Four-week timeline',
    description: 'Ideal for businesses and professional projects',
    features: [
      'Extended consultation (2 hours)',
      'Up to 5 concept iterations',
      '25 high-resolution final images',
      'Advanced retouching & color grading',
      'Multiple format delivery',
      'Priority email & phone support',
      'Usage rights for commercial purposes',
      '1 round of revisions included',
    ],
    popular: true,
  },
  {
    name: 'Premium Package',
    price: '$2,500',
    timeline: 'Six-week comprehensive',
    description: 'Complete solution for major campaigns',
    features: [
      'Full-day consultation & planning',
      'Unlimited concept iterations',
      '50+ high-resolution final images',
      'Professional retouching & effects',
      'All format delivery (print & web)',
      '24/7 priority support',
      'Full commercial usage rights',
      '3 rounds of revisions',
      'Rush delivery available',
      'Dedicated project manager',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Services & Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your project needs. All packages include professional
              consultation and high-quality deliverables.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md p-8 relative ${
                  tier.popular ? 'border-4 border-[hsl(179,70%,36%)]' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[hsl(179,70%,36%)] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-[hsl(179,70%,36%)] mb-2">
                    {tier.price}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{tier.timeline}</p>
                  <p className="text-gray-600">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="text-[hsl(179,70%,36%)] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className={`block text-center py-3 px-6 rounded-md font-medium transition-all ${
                    tier.popular
                      ? 'bg-[hsl(179,70%,36%)] text-white hover:brightness-90'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-md p-10 lg:p-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What&apos;s included in the consultation?</h3>
                <p className="text-gray-600">
                  Every consultation includes project scoping, creative direction discussion, timeline planning,
                  and deliverable specifications. We&apos;ll ensure we understand your vision completely.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I upgrade my package later?</h3>
                <p className="text-gray-600">
                  Absolutely! You can upgrade to a higher tier at any time during the project. We&apos;ll credit
                  your initial payment and adjust the scope accordingly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What is your revision policy?</h3>
                <p className="text-gray-600">
                  Revisions are included based on your package tier. Additional revisions beyond the included
                  rounds can be added for $150 per round.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer custom packages?</h3>
                <p className="text-gray-600">
                  Yes! If none of these packages fit your needs, we can create a custom solution. Contact us
                  to discuss your specific requirements and we&apos;ll provide a tailored quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
