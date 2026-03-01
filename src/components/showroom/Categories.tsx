import Image from "next/image";
import { interiorDesigns } from "@/components/showroom/data";

export default function Categories() {
  return (
    <section id="show" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9a7b1a]">New Tile Interior Designs</p>
        <h2 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">Show Section</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {interiorDesigns.map((design) => (
          <article
            key={design.title}
            className="group relative overflow-hidden rounded-3xl border border-stone-200"
          >
            <Image
              src={design.image}
              alt={design.title}
              width={1200}
              height={900}
              loading="lazy"
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">
              {design.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
