import { notFound } from "next/navigation";

export default function DemoDirectoryPage() {
  notFound();
import Link from "next/link";
import type { Metadata } from "next";
import { stores } from "@/data/stores";

export const metadata: Metadata = {
  title: "Tile Showroom Demo Platform",
  description: "Multi-client tile showroom demos. Open a client URL and see fully personalized pages from a central data file.",
};

export default function DemoIndexPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Tile Showroom Demo Platform</h1>
      <p className="mt-2 text-stone-600">Choose a client demo. Add a new store in <code>/src/data/stores.ts</code> and a new route auto-works.</p>

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
