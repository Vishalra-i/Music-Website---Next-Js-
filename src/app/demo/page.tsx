import Link from "next/link";
import type { Metadata } from "next";
import { getStores } from "@/lib/db/stores";

export const metadata: Metadata = {
  title: "Tile Showroom Demo Platform",
  description: "Multi-client tile showroom demos with centralized and runtime store data.",
};

export default async function DemoIndexPage() {
  const stores = await getStores();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Tile Showroom Demo Platform</h1>
      <p className="mt-2 text-stone-600">
        Choose a client demo. Add a new store from admin or inside
        <code className="mx-1 rounded bg-stone-100 px-1">/src/data/stores.ts</code>.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(stores).map(([slug, store]) => (
          <Link key={slug} href={`/demo/${slug}`} className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm hover:border-stone-300">
            <h2 className="text-lg font-semibold">{store.name}</h2>
            <p className="mt-1 text-sm text-stone-600">{store.city}</p>
            <p className="mt-3 text-sm text-green-700">Open demo →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
