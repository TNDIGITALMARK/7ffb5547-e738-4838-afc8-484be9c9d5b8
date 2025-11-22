import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import Gallery from '@/components/portfolio/Gallery';
import Testimonials from '@/components/portfolio/Testimonials';
import Footer from '@/components/portfolio/Footer';

export const dynamic = 'force-dynamic';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Gallery />

        {/* About Section */}
        <section id="about" className="py-16 px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-10 lg:p-16">
              <h2 className="text-3xl font-semibold mb-6 text-center">About</h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  As a fifteen-year industry veteran, I specialize in creative solutions for modern businesses.
                  My passion lies in capturing authentic moments and transforming them into timeless visual stories.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From corporate portraits to artistic photography, I bring a unique blend of technical expertise
                  and creative vision to every project. Let&apos;s create something extraordinary together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}