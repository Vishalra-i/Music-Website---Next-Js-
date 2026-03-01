import Image from "next/image";
import { productCategories } from "@/components/showroom/data";

export default function Products() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9a7b1a]">Products / Collection</p>
        <h2 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">Crafted Tile Collections</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {productCategories.map((category) => (
          <article
            key={category.title}
            className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={category.image}
                alt={category.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-stone-900">{category.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
