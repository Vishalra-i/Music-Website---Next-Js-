import Link from "next/link";
import type { StoreData } from "@/data/stores";

type RestaurantTemplateProps = {
  store: StoreData;
};

export default function RestaurantTemplate({ store }: RestaurantTemplateProps) {
  const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Hi ${store.name}, I want to check your menu and table availability.`)}`;

  return (
    <main className="bg-amber-50">
      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <p className="inline-flex rounded-full bg-amber-200 px-3 py-1 text-xs font-semibold text-amber-900">
          ⭐ {store.rating} ({store.reviews} reviews)
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-stone-900">{store.name}</h1>
        <p className="mt-3 text-lg text-stone-700">Restaurant in {store.city}</p>
        <p className="mt-2 text-stone-600">Serving guests since {store.established}. Discover our specialties and reserve your table quickly.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#menu" className="rounded-lg bg-stone-900 px-5 py-3 text-sm font-semibold text-white">
            View Menu
          </a>
          <Link href={whatsappUrl} target="_blank" className="rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white">
            WhatsApp Reservation
          </Link>
        </div>
      </section>

      <section id="menu" className="mx-auto w-full max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold text-stone-900">Menu</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {store.categories.map((category) => (
            <article key={category} className="rounded-xl border border-amber-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-stone-800">{category}</h3>
            </article>
          ))}
        </div>
      </section>

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
