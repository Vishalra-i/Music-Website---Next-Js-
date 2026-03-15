import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { businessData, whatsappMessage } from "@/data/business";
import { whatsappWithMessage } from "@/components/site/utils";

export const metadata: Metadata = {
  title: `Tile Collection | ${businessData.name}`,
  description: `Browse ${businessData.name} tile categories including floor, wall, bathroom, ceramic, and imported tiles. Enquire instantly on WhatsApp.`,
};

export default function TilesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Tile Categories & Gallery</h1>
      <p className="mt-2 text-stone-600">Choose a category and send a quick enquiry for price, sizes, and availability.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {businessData.categories.map((item) => (
          <article key={item.name} className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
            <Image src={item.image} alt={item.name} width={600} height={420} className="h-52 w-full object-cover" />
            <div className="space-y-3 p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <Link
                href={whatsappWithMessage(`${whatsappMessage} Category: ${item.name}`)}
                target="_blank"
                className="inline-block rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Enquire on WhatsApp
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
