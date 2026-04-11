import Image from "next/image";
import Link from "next/link";
import type { PropertyListing } from "@/data/realestate";

type PropertyCardProps = {
  property: PropertyListing;
  whatsappNumber: string;
  businessName: string;
};

function formatPrice(price: number, type: PropertyListing["type"]) {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

  return type === "rent" ? `${formatted}/month` : formatted;
}

export default function PropertyCard({ property, whatsappNumber, businessName }: PropertyCardProps) {
  const message = `Hi ${businessName}, I am interested in ${property.title} (${property.location}). Please share details.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <article className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      <Image src={property.image} alt={property.title} width={720} height={480} className="h-52 w-full object-cover" />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-stone-900">{property.title}</h3>
          <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-semibold uppercase text-stone-700">{property.type}</span>
        </div>
        <p className="text-xl font-bold text-emerald-700">{formatPrice(property.price, property.type)}</p>
        <p className="text-sm text-stone-600">{property.location}</p>
        <p className="text-sm text-stone-700">{property.description}</p>

        <Link href={whatsappUrl} target="_blank" className="inline-block rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white">
          WhatsApp Inquiry
        </Link>
      </div>
    </article>
  );
}
