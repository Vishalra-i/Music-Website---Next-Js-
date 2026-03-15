"use client";

import { useState } from "react";

export const galleryCategoryMap = [
  { label: "Floor Tiles", key: "tiles" },
  { label: "Wall Tiles", key: "tiles" },
  { label: "Bathroom Tiles", key: "tiles" },
  { label: "Wash Basin", key: "washbasin" },
  { label: "Bathroom Accessories", key: "bathroomAccessories" },
  { label: "Sanitaryware", key: "sanitaryware" },
  { label: "Designer Tiles", key: "designerTiles" },
  { label: "Imported Tiles", key: "importedTiles" },
];

const restaurantCategoryMap = [
  "Starters",
  "Main Course",
  "Chinese",
  "Desserts",
  "Drinks",
];

type StoreType = "tiles" | "restaurant";

export default function AddStoreForm() {
  const [status, setStatus] = useState<string>("");
  const [storeType, setStoreType] = useState<StoreType>("tiles");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categoryOptions = storeType === "restaurant" ? restaurantCategoryMap : galleryCategoryMap.map((cat) => cat.label);

  const namePlaceholder = storeType === "restaurant" ? "Restaurant Name" : "Store Name";
  const categoriesLabel = storeType === "restaurant" ? "Select Menu Categories" : "Select Tile Categories";

  function toggleCategory(label: string) {
    setSelectedCategories((prev) =>
      prev.includes(label)
        ? prev.filter((c) => c !== label)
        : [...prev, label]
    );
  }

  async function onSubmit(formData: FormData) {
    setStatus("Saving...");

    const payload = {
      type: storeType,
      name: String(formData.get("name") || ""),
      city: String(formData.get("city") || ""),
      phone: String(formData.get("phone") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      address: String(formData.get("address") || ""),
      established: String(formData.get("established") || ""),
      rating: String(formData.get("rating") || ""),
      reviews: String(formData.get("reviews") || "New"),
      heroImage: String(
        formData.get("heroImage") || "/images/hero-showroom.svg"
      ),
      categories: selectedCategories,
    };

    const res = await fetch("/api/admin/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setStatus("Failed to add store");
      return;
    }

    const data = await res.json();
    setStatus(`Store added successfully. URL: /demo/${data.slug}`);

    window.location.reload();
  }

  return (
    <form
      action={onSubmit}
      className="mt-8 grid gap-3 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-xl font-bold">Add New Store</h2>

      <label className="grid gap-1 text-sm font-medium text-stone-700">
        Store Type
        <select
          name="type"
          value={storeType}
          onChange={(event) => {
            const selectedType = event.target.value as StoreType;
            setStoreType(selectedType);
            setSelectedCategories([]);
          }}
          className="rounded border border-stone-300 px-3 py-2 font-normal"
        >
          <option value="tiles">Tiles</option>
          <option value="restaurant">Restaurant</option>
        </select>
      </label>

      <input
        name="name"
        placeholder={namePlaceholder}
        required
        className="rounded border border-stone-300 px-3 py-2"
      />

      <input
        name="city"
        placeholder="City"
        required
        className="rounded border border-stone-300 px-3 py-2"
      />

      <input
        name="phone"
        placeholder="Phone"
        required
        className="rounded border border-stone-300 px-3 py-2"
      />

      <input
        name="whatsapp"
        placeholder="WhatsApp"
        required
        className="rounded border border-stone-300 px-3 py-2"
      />

      <input
        name="address"
        placeholder="Address"
        required
        className="rounded border border-stone-300 px-3 py-2"
      />

      <input
        name="established"
        placeholder="Established Year"
        required
        className="rounded border border-stone-300 px-3 py-2"
      />

      <input
        name="rating"
        placeholder="Rating"
        required
        className="rounded border border-stone-300 px-3 py-2"
      />

      <input
        name="reviews"
        placeholder="Reviews (optional)"
        className="rounded border border-stone-300 px-3 py-2"
      />

      <input
        name="heroImage"
        placeholder="Hero Image Path (optional)"
        defaultValue="/images/hero-showroom.svg"
        className="rounded border border-stone-300 px-3 py-2"
      />

      {/* CATEGORY SELECT */}
      <div className="rounded border border-stone-300 p-3">
        <p className="mb-2 font-semibold">{categoriesLabel}</p>

        <div className="grid grid-cols-2 gap-2">
          {categoryOptions.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 text-sm"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="rounded bg-stone-900 px-4 py-2 text-sm font-semibold text-white"
      >
        Add Store
      </button>

      {status && <p className="text-sm text-stone-600">{status}</p>}
    </form>
  );
}
