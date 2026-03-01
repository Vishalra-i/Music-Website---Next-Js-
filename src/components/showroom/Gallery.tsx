"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/components/showroom/data";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9a7b1a]">Gallery</p>
        <h2 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">Showroom Highlights</h2>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-4 [&>button:not(:first-child)]:mt-4">
        {galleryImages.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setActiveImage(image)}
            className="group relative w-full overflow-hidden rounded-2xl"
            aria-label={`View showroom image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Royal Tile Studio gallery ${index + 1}`}
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActiveImage(null)}
          role="presentation"
        >
          <Image
            src={activeImage}
            alt="Expanded showroom tile"
            width={1600}
            height={1200}
            className="max-h-[90vh] w-auto max-w-[95vw] rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
