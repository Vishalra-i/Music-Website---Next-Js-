import Link from "next/link";
import type { Metadata } from "next";
import { businessData, whatsappMessage } from "@/data/business";
import { siteLinks, whatsappWithMessage } from "@/components/site/utils";

export const metadata: Metadata = {
  title: `Contact ${businessData.name}`,
  description: `Call or WhatsApp ${businessData.name} at ${businessData.phone}. Visit our showroom at ${businessData.address}.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Contact & Location</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <p><span className="font-semibold">Phone:</span> {businessData.phone}</p>
          <p><span className="font-semibold">Address:</span> {businessData.address}</p>
          <p><span className="font-semibold">City:</span> {businessData.city}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href={siteLinks.call} className="rounded-md bg-stone-900 px-4 py-2 text-sm font-semibold text-white">Call Now</Link>
            <Link href={whatsappWithMessage(whatsappMessage)} target="_blank" className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white">WhatsApp</Link>
          </div>
        </div>
        <iframe
          title="Google map"
          src={businessData.mapEmbed}
          loading="lazy"
          className="h-80 w-full rounded-xl border border-stone-200"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
}
