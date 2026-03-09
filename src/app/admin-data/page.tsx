import type { Metadata } from "next";
import { businessData } from "@/data/business";

export const metadata: Metadata = {
  title: `Admin Data | ${businessData.name}`,
  description: "Central editable business data used across all website pages.",
};

export default function AdminDataPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold">Master Data Page</h1>
      <p className="mt-2 text-stone-600">
        Edit <code className="rounded bg-stone-100 px-1 py-0.5">/src/data/business.ts</code> and the entire website updates automatically.
      </p>

      <div className="mt-8 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div><dt className="text-sm font-semibold text-stone-500">Business name</dt><dd>{businessData.name}</dd></div>
          <div><dt className="text-sm font-semibold text-stone-500">Phone</dt><dd>{businessData.phone}</dd></div>
          <div><dt className="text-sm font-semibold text-stone-500">Address</dt><dd>{businessData.address}</dd></div>
          <div><dt className="text-sm font-semibold text-stone-500">City</dt><dd>{businessData.city}</dd></div>
          <div><dt className="text-sm font-semibold text-stone-500">Established</dt><dd>{businessData.established}</dd></div>
          <div><dt className="text-sm font-semibold text-stone-500">Rating</dt><dd>{businessData.rating} ({businessData.reviews} reviews)</dd></div>
          <div className="sm:col-span-2"><dt className="text-sm font-semibold text-stone-500">Hero Image</dt><dd>{businessData.heroImage}</dd></div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-semibold text-stone-500">Categories & Images</dt>
            <dd>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {businessData.categories.map((item) => (
                  <li key={item.name}>{item.name} — {item.image}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
