import type { Metadata } from "next";
import Link from "next/link";
import Categories from "@/components/Categories";
import ConversionBar from "@/components/ConversionBar";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import ShowroomMap from "@/components/ShowroomMap";
import WhatsappCTA from "@/components/WhatsappCTA";
import { getStores } from "@/lib/db/stores";

type DemoPageProps = {
  params: {
    store: string;
  };
};

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const stores = await getStores();
  const store = stores[params.store];

  if (!store) {
    return {
      title: "Store Not Found",
      description: "Store page not found.",
    };
  }

  return {
    title: `${store.name} | Tile Showroom in ${store.city}`,
    description: `Visit ${store.name}, trusted tile and sanitary showroom in ${store.city}. Explore floor tiles, wall tiles, wash basins and bathroom accessories.`,
  };
}

export default async function DemoStorePage({ params }: DemoPageProps) {
  const stores = await getStores();
  const store = stores[params.store];

  if (!store) {
    return (
      <main className="mx-auto w-full max-w-4xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Store not found</h1>
        <p className="mt-2 text-stone-600">
          Please check the URL or add the store inside
          <code className="mx-1 rounded bg-stone-100 px-1">/src/data/stores.ts</code>.
        </p>
        <Link href="/demo" className="mt-6 inline-block rounded-md bg-stone-900 px-4 py-2 text-sm font-semibold text-white">
          Back to demos
        </Link>
      </main>
    );
  }

  return (
    <main>
      <Hero store={store} />

      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="text-2xl font-bold">How customers reach your showroom</h2>
          <p className="mt-2 text-stone-600">Google Search → Website → Tile Selection → WhatsApp Enquiry → Showroom Visit</p>
        </div>
      </section>

      <Categories store={store} />
      <ProductGallery store={store} />
      <ShowroomMap store={store} />

      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-6xl rounded-xl border border-stone-200 bg-stone-50 p-6">
          <h2 className="text-2xl font-bold">Builders & Contractors</h2>
          <p className="mt-3 text-stone-700">
            Bulk tile supply, contractor partnerships, and project-based support for residential and commercial developments.
          </p>
        </div>
      </section>

      <WhatsappCTA store={store} />
      <ConversionBar store={store} />
    </main>
  );
}
