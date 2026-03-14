import Image from "next/image";
import { trendingTiles } from "@/components/demo2/content";

export default function TrendingTiles() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-center text-3xl font-semibold text-slate-800 md:text-4xl">Trending Tile Designs 2026</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trendingTiles.map((tile) => (
            <article
              key={tile.name}
              className="group overflow-hidden rounded-xl bg-white shadow-xl shadow-slate-200/70 transition duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={tile.image} alt={tile.name} fill className="object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-xl font-semibold text-slate-900">{tile.name}</h3>
                <p className="text-sm text-slate-500">{tile.size}</p>
                <button className="pt-3 text-sm font-semibold text-indigo-500 hover:text-indigo-600">View Details →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
