"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import FilterBar from "@/components/realestate/FilterBar";
import PropertyCard from "@/components/realestate/PropertyCard";
import { propertyListings } from "@/data/realestate";
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
      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
          ⭐ {store.rating} ({store.reviews} client reviews)
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-slate-900">Find Your Dream Property</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Explore curated homes and investment-ready properties across top locations. Connect with {store.name} instantly for site visits and pricing.
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
      </section>

      <section id="listings" className="mx-auto w-full max-w-6xl px-4 pb-14">
        <FilterBar
          mode={mode}
          onModeChange={setMode}
          location={location}
          onLocationChange={setLocation}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          locations={locations}
        />

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} whatsappNumber={store.whatsapp} businessName={store.name} />
          ))}
        </div>

        {filteredProperties.length === 0 ? <p className="mt-5 text-sm text-slate-600">No properties found for selected filters.</p> : null}
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
