"use client";

import { FormEvent, useState } from "react";

type InquiryFormProps = {
  whatsapp: string;
};

export default function InquiryForm({ whatsapp }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tileType, setTileType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nTile Type: ${tileType}\nMessage: ${message}`;
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-3xl px-4">
        <h2 className="text-center text-3xl font-semibold text-slate-800 md:text-4xl">Request Tile Price</h2>
        <form onSubmit={handleSubmit} className="mt-10 space-y-4 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8">
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-indigo-500 transition focus:ring"
          />
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-indigo-500 transition focus:ring"
          />
          <input
            required
            value={tileType}
            onChange={(event) => setTileType(event.target.value)}
            placeholder="Tile Type"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-indigo-500 transition focus:ring"
          />
          <textarea
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-indigo-500 transition focus:ring"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] hover:bg-indigo-400"
          >
            Send WhatsApp Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
