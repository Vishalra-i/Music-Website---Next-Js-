import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Multi-Client Tile Showroom Demo Platform</h1>
      <p className="mt-4 max-w-3xl text-stone-600">
        This Next.js platform generates SEO-focused tile showroom pages using dynamic routes. Add a new store object in
        <code className="mx-1 rounded bg-stone-100 px-1">/src/data/stores.ts</code>
        and open its URL at <code className="mx-1 rounded bg-stone-100 px-1">/demo/[store]</code> without creating new pages.
      </p>

      <div className="mt-8">
        <Link href="/demo" className="rounded-lg bg-stone-900 px-5 py-3 text-sm font-semibold text-white">
          View Demo Stores
        </Link>
      </div>
    </main>
  );
}
