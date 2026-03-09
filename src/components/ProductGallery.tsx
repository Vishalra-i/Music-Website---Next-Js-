"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { gallery, galleryCategoryMap } from "@/data/gallery";
import type { StoreData } from "@/data/stores";

type ProductGalleryProps = {
  store: StoreData;
};

export default function ProductGallery({ store }: ProductGalleryProps) {
  const availableCategories = useMemo(
    () => galleryCategoryMap.filter((item) => store.categories.includes(item.label)),
    [store.categories]
  );

  const [activeCategory, setActiveCategory] = useState(
    availableCategories[0]?.label ?? "Floor Tiles"
  );

  const active =
    availableCategories.find((item) => item.label === activeCategory) ??
    availableCategories[0];

  const products = active ? gallery[active.key] : [];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Product Gallery</h2>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {availableCategories.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveCategory(item.label)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium ${
              activeCategory === item.label
                ? "border-stone-900 bg-stone-900 text-white"
                : "border-stone-300 bg-white text-stone-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((src, index) => (
          <article key={`${active?.label}-${src}-${index}`} className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
            <Image src={src} alt={`${active?.label} ${index + 1}`} width={640} height={420} className="h-48 w-full object-cover" />
            <div className="p-4">
              <p className="font-semibold text-stone-800">{active?.label}</p>
              <Link
                href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(
                  "Hello I saw this product on your website and want details"
                )}`}
                target="_blank"
                className="mt-3 inline-block rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white"
              >
                WhatsApp Enquiry
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
