import Link from "next/link";
import type { Metadata } from "next";
import { businessData, whatsappMessage } from "@/data/business";
import { whatsappWithMessage } from "@/components/site/utils";

export const metadata: Metadata = {
  title: `Builders & Contractors | ${businessData.name}`,
  description: `Bulk tile and sanitary supply for builders and contractors in ${businessData.city}. Contact ${businessData.name} for project requirements.`,
};

export default function BuildersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Builders & Contractors</h1>
      <p className="mt-2 text-stone-600">Reliable project support for residential and commercial developments.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          "Bulk supply with consistent stock and transparent pricing",
          "Contractor partnerships with dedicated account support",
          "Large project supply planning and phased delivery",
        ].map((text) => (
          <div key={text} className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-stone-700">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-stone-900 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Need a bulk quote?</h2>
        <p className="mt-2 text-stone-200">Share your BOQ, project size, and timeline. Our team will respond quickly.</p>
        <Link
          href={whatsappWithMessage(`${whatsappMessage} I am interested in bulk order supply.`)}
          target="_blank"
          className="mt-5 inline-block rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold"
        >
          Contact on WhatsApp
        </Link>
      </div>
    </main>
  );
}
