import Link from "next/link";
import type { Demo2SectionProps } from "@/components/demo2/types";

export default function ContactSection({ store }: Demo2SectionProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(store.address)}&output=embed`;
  const whatsappLink = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent("Hi, please share tile price details.")}`;

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl bg-slate-800/70 p-6">
          <h2 className="text-3xl font-semibold">Visit Our Showroom</h2>
          <p className="text-slate-200">Address: {store.address}</p>
          <p className="text-slate-200">Phone: {store.phone}</p>
          <p className="text-slate-200">WhatsApp: +91 {store.whatsapp}</p>
          <Link
            href={whatsappLink}
            target="_blank"
            className="inline-flex rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-indigo-400"
          >
            Ask for Tile Price
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-700">
          <iframe title="Store map" src={mapSrc} className="h-[360px] w-full" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
