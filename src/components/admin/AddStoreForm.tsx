"use client";

import { useState } from "react";

export default function AddStoreForm() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(formData: FormData) {
    setStatus("Saving...");
    const categories = String(formData.get("categories") || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const payload = {
      name: String(formData.get("name") || ""),
      city: String(formData.get("city") || ""),
      phone: String(formData.get("phone") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      address: String(formData.get("address") || ""),
      established: String(formData.get("established") || ""),
      rating: String(formData.get("rating") || ""),
      reviews: String(formData.get("reviews") || "New"),
      heroImage: String(formData.get("heroImage") || "/images/hero-showroom.svg"),
      categories,
    };

    const res = await fetch("/api/admin/stores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setStatus("Failed to add store");
      return;
    }

    const data = (await res.json()) as { slug: string };
    setStatus(`Store added successfully. URL: /demo/${data.slug}`);
    window.location.reload();
  }

  return (
    <form action={onSubmit} className="mt-8 grid gap-3 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">Add New Store</h2>
      <input name="name" placeholder="Store Name" required className="rounded border border-stone-300 px-3 py-2" />
      <input name="city" placeholder="City" required className="rounded border border-stone-300 px-3 py-2" />
      <input name="phone" placeholder="Phone" required className="rounded border border-stone-300 px-3 py-2" />
      <input name="whatsapp" placeholder="WhatsApp" required className="rounded border border-stone-300 px-3 py-2" />
      <input name="address" placeholder="Address" required className="rounded border border-stone-300 px-3 py-2" />
      <input name="established" placeholder="Established Year" required className="rounded border border-stone-300 px-3 py-2" />
      <input name="rating" placeholder="Rating" required className="rounded border border-stone-300 px-3 py-2" />
      <input name="reviews" placeholder="Reviews (optional)" className="rounded border border-stone-300 px-3 py-2" />
      <input
        name="heroImage"
        placeholder="Hero Image Path (optional)"
        defaultValue="/images/hero-showroom.svg"
        className="rounded border border-stone-300 px-3 py-2"
      />
      <textarea
        name="categories"
        placeholder="Categories (comma separated)"
        required
        className="rounded border border-stone-300 px-3 py-2"
      />
      <button type="submit" className="rounded bg-stone-900 px-4 py-2 text-sm font-semibold text-white">Add Store</button>
      {status && <p className="text-sm text-stone-600">{status}</p>}
    </form>
  );
}
