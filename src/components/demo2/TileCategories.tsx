import Image from "next/image";
import { tileCategories } from "@/components/demo2/content";

export default function TileCategories() {
  return (
    <section id="tile-categories" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-center text-3xl font-semibold text-slate-800 md:text-4xl">Explore Tile Categories</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tileCategories.map((category) => (
            <article
              key={category.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4 p-5">
                <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                <button className="text-sm font-semibold text-indigo-500 transition hover:text-indigo-600">View Designs →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
