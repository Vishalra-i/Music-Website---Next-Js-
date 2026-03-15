import Link from "next/link";
import type { StoreData } from "@/data/stores";
import MenuSection from "@/components/templates/MenuSection";

type RestaurantTemplateProps = {
  store: StoreData;
};

export default function RestaurantTemplate({ store }: RestaurantTemplateProps) {
  const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Hi ${store.name}, I want to check your menu and table availability.`)}`;

  // Hero image is always sourced from admin-provided store data for restaurant demos.
  const heroImage = store.heroImage;

  return (
    <main className="bg-amber-50">
      <section
        className="relative flex min-h-[72vh] items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.58), rgba(17, 24, 39, 0.58)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 text-white">
          <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
            ⭐ {store.rating} ({store.reviews} reviews)
          </p>
          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">{store.name}</h1>
          <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">
            Restaurant in {store.city}. Serving guests since {store.established} with flavors your customers will remember.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-lg bg-stone-900 px-5 py-3 text-sm font-semibold text-white">
              Explore Menu
            </a>
            <Link href={whatsappUrl} target="_blank" className="rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white">
              WhatsApp Reservation
            </Link>
          </div>
        </div>
      </section>

      <MenuSection />

      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-stone-900">Visit Us</h2>
          <p className="mt-2 text-stone-600">{store.address}</p>
          <iframe
            title={`${store.name} map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(store.address)}&output=embed`}
            loading="lazy"
            className="mt-5 h-80 w-full rounded-xl border border-stone-200"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
