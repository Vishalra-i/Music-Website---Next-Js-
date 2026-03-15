import type { Metadata } from "next";
import Link from "next/link";
import RestaurantTemplate from "@/components/templates/RestaurantTemplate";
import TilesModernTemplate from "@/components/templates/TilesModernTemplate";
import { getStoreType } from "@/data/stores";
import { getStores } from "@/lib/db/stores";


type Demo2PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Demo2PageProps): Promise<Metadata> {
  const stores = await getStores();
  const store = stores[params.slug];

  if (!store) {
    return {
      title: "Store Not Found",
      description: "Store page not found.",
    };
  }

  const type = getStoreType(store);

  return {
    title: type === "restaurant" ? `${store.name} | Restaurant Experience` : `${store.name} | Tiles Showroom Experience`,
    description:
      type === "restaurant"
        ? `Explore ${store.name} in ${store.city} with menu highlights and quick WhatsApp reservations.`
        : `Explore ${store.name} in ${store.city} with premium tile categories, trending designs, and quick WhatsApp inquiries.`,
  };
}

export default async function Demo2StorePage({ params }: Demo2PageProps) {
  const stores = await getStores();
  const store = stores[params.slug];

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

  return type === "restaurant" ? <RestaurantTemplate store={store} /> : <TilesModernTemplate store={store} slug={params.slug} />;
}
