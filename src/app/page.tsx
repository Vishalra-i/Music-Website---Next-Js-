import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Scalable Multi-Client Tile Showroom Websites</h1>
      <p className="mt-4 max-w-3xl text-stone-600">
        Add a new store in <code className="mx-1 rounded bg-stone-100 px-1">/src/data/stores.ts</code> and the website automatically supports a new route at
        <code className="mx-1 rounded bg-stone-100 px-1">/demo/[store]</code> with dynamic SEO, product gallery, and conversion actions.
      </p>

      <div className="mt-8 flex gap-3">
        <Link href="/demo" className="rounded-lg bg-stone-900 px-5 py-3 text-sm font-semibold text-white">
          View Demo Stores
        </Link>
        <Link href="/demo/selection-zone" className="rounded-lg bg-stone-900 px-5 py-3 text-sm font-semibold text-white">
          Open Store Website
        </Link>
        <Link href="/admin" className="rounded-lg bg-stone-200 px-5 py-3 text-sm font-semibold text-stone-900">
          Admin Dashboard
        </Link>
      </div>
    </main>
  );
}
