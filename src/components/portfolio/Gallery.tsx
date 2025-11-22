'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  {
    src: '/generated/gallery-4.jpg',
    alt: 'Portrait Photography',
    title: 'Studio Portrait',
  },
  {
    src: '/generated/gallery-1.jpg',
    alt: 'Landscape Photography',
    title: 'Journey',
  },
  {
    src: '/generated/gallery-2.jpg',
    alt: 'Urban Photography',
    title: 'Urban Exploration',
  },
  {
    src: '/generated/gallery-3.jpg',
    alt: 'Silhouette Photography',
    title: 'Golden Hour',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-10 lg:p-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Portfolio Gallery</h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-4xl w-full aspect-square">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
