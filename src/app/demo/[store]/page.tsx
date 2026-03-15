import type { Metadata } from "next";
import Link from "next/link";
import RestaurantTemplate from "@/components/templates/RestaurantTemplate";
import TilesTemplate from "@/components/templates/TilesTemplate";
import { getStoreType } from "@/data/stores";
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

  const type = getStoreType(store);

  return {
    title: type === "restaurant" ? `${store.name} | Restaurant in ${store.city}` : `${store.name} | Tile Showroom in ${store.city}`,
    description:
      type === "restaurant"
        ? `Visit ${store.name} in ${store.city}. Explore menu sections and connect instantly on WhatsApp.`
        : `Visit ${store.name}, trusted tile and sanitary showroom in ${store.city}. Explore floor tiles, wall tiles, wash basins and bathroom accessories.`,
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

  const type = getStoreType(store);
  return type === "restaurant" ? (
    <RestaurantTemplate store={store} />
  ) : (
    <TilesTemplate store={store} />
  );
}
