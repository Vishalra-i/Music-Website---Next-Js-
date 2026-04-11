"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterBar from "@/components/realestate/FilterBar";
import PropertyCard from "@/components/realestate/PropertyCard";
import { propertyListings, realEstateGalleryImages, realEstateTestimonials } from "@/data/realestate";
import type { StoreData } from "@/data/stores";

type RealEstateTemplateProps = {
  store: StoreData;
};

function matchesPriceRange(price: number, range: "all" | "low" | "medium" | "high") {
  if (range === "all") return true;
  if (range === "low") return price < 5000000;
  if (range === "medium") return price >= 5000000 && price <= 10000000;
  return price > 10000000;
}

export default function RealEstateTemplate({ store }: RealEstateTemplateProps) {
  const [mode, setMode] = useState<"all" | "buy" | "rent">("all");
  const [location, setLocation] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<"all" | "low" | "medium" | "high">("all");

  const locations = useMemo(() => Array.from(new Set(propertyListings.map((item) => item.location))), []);
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(store.address)}&output=embed`;

  const filteredProperties = useMemo(
    () =>
      propertyListings.filter((property) => {
        const byMode = mode === "all" || property.type === mode;
        const byLocation = location === "all" || property.location === location;
        const byPrice = matchesPriceRange(property.price, priceRange);
        return byMode && byLocation && byPrice;
      }),
    [location, mode, priceRange]
  );

  return (
    <main className="bg-slate-50">
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            ⭐ {store.rating} ({store.reviews} client reviews)
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">Find Your Dream Property</h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Explore curated homes, luxury residences, and rental-ready properties with verified documentation and dedicated agent support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#listings" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              View Listings
            </a>
            <Link
              href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Hi ${store.name}, I want expert guidance for buying or renting a property.`)}`}
              target="_blank"
              className="rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Contact Agent
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image src={store.heroImage} alt="Real estate hero" width={1200} height={900} className="h-full min-h-[280px] w-full object-cover" priority />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Phone</p>
            <p className="mt-2 text-sm font-semibold text-slate-800">{store.phone}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Address</p>
            <p className="mt-2 text-sm font-semibold text-slate-800">{store.address}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">WhatsApp</p>
            <Link href={`https://wa.me/${store.whatsapp}`} target="_blank" className="mt-2 inline-block text-sm font-semibold text-green-700">
              +{store.whatsapp}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-bold text-slate-900">What Clients Say</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {realEstateTestimonials.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-700">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="listings" className="mx-auto w-full max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-bold text-slate-900">Featured Listings</h2>
        <p className="mt-2 text-sm text-slate-600">Filter properties by purpose, location, and price range.</p>
        <div className="mt-5">
          <FilterBar
            mode={mode}
            onModeChange={setMode}
            location={location}
            onLocationChange={setLocation}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            locations={locations}
          />
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} whatsappNumber={store.whatsapp} businessName={store.name} />
          ))}
        </div>

        {filteredProperties.length === 0 ? <p className="mt-5 text-sm text-slate-600">No properties found for selected filters.</p> : null}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-bold text-slate-900">Property Gallery</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {realEstateGalleryImages.map((image, index) => (
            <div key={`${image}-${index}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image src={image} alt={`Property gallery ${index + 1}`} width={720} height={520} className="h-52 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-14 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Visit Our Office</h2>
          <p className="mt-2 text-slate-600">Meet our agents in person for location insights, legal guidance, and site visit planning.</p>
          <p className="mt-4 text-sm font-semibold text-slate-800">{store.address}</p>
        </div>
        <iframe
          title={`${store.name} office location`}
          src={mapUrl}
          loading="lazy"
          className="h-72 w-full rounded-xl border border-slate-200 bg-white"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="border-y border-slate-200 bg-white py-12">
        <div className="mx-auto w-full max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">List Your Property</h2>
          <p className="mt-2 text-slate-600">Want to sell or rent your property faster? Get verified leads and expert marketing support.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Hi ${store.name}, I want to list my property.`)}`}
              target="_blank"
              className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              List Your Property
            </Link>
            <Link
              href={`https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Hi ${store.name}, I need consultation from an agent.`)}`}
              target="_blank"
              className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Contact Agent
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
