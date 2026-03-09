import Image from "next/image";
import Link from "next/link";
import type { StoreData } from "@/data/stores";

type HeroProps = {
  store: StoreData;
};

export default function Hero({ store }: HeroProps) {
  const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(
    "Hello I saw your tiles online and want more details"
  )}`;

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:items-center md:py-14">
      <div className="space-y-4">
        <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          Rated {store.rating} ({store.reviews} reviews)
        </p>
        <h1 className="text-3xl font-extrabold sm:text-5xl">{store.name}</h1>
        <p className="text-lg text-stone-700">Premium Tile Showroom in {store.city}</p>
        <p className="text-stone-600">Trusted since {store.established}. Discover curated collections for homes and projects.</p>
        <div className="flex flex-wrap gap-3">
          <a href="#categories" className="rounded-lg bg-stone-900 px-5 py-3 text-sm font-semibold text-white">
            View Tile Collection
          </a>
          <Link href={whatsappUrl} target="_blank" className="rounded-lg bg-green-500 px-5 py-3 text-sm font-semibold text-white">
            WhatsApp Enquiry
          </Link>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white p-2 shadow-sm">
        <Image
          src={store.heroImage}
          alt={`${store.name} showroom`}
          width={920}
          height={620}
          priority
          className="h-auto w-full rounded-xl"
        />
      </div>
    </section>
  );
}
