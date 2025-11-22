import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Creative Visions,<br />Captured.
              </h1>
              <Link
                href="/booking"
                className="inline-block bg-[hsl(179,70%,36%)] text-white px-8 py-3 rounded-md font-medium text-sm hover:brightness-90 transition-all"
              >
                BOOK A SESSION
              </Link>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/generated/profile-main.jpg"
                  alt="Professional Portrait"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-[hsl(179,70%,36%)] object-cover"
                  style={{ width: '300px', height: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
