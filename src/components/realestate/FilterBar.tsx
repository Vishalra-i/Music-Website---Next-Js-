"use client";

type FilterBarProps = {
  mode: "all" | "buy" | "rent";
  onModeChange: (mode: "all" | "buy" | "rent") => void;
  location: string;
  onLocationChange: (value: string) => void;
  priceRange: "all" | "low" | "medium" | "high";
  onPriceRangeChange: (range: "all" | "low" | "medium" | "high") => void;
  locations: string[];
};

export default function FilterBar({
  mode,
  onModeChange,
  location,
  onLocationChange,
  priceRange,
  onPriceRangeChange,
  locations,
}: FilterBarProps) {
  return (
    <section className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="grid gap-3 md:grid-cols-3">
        <label className="grid gap-1 text-sm font-medium text-stone-700">
          Buy / Rent
          <select value={mode} onChange={(event) => onModeChange(event.target.value as "all" | "buy" | "rent")} className="rounded border border-stone-300 px-3 py-2 font-normal">
            <option value="all">All</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </label>

        <label className="grid gap-1 text-sm font-medium text-stone-700">
          Location
          <select value={location} onChange={(event) => onLocationChange(event.target.value)} className="rounded border border-stone-300 px-3 py-2 font-normal">
            <option value="all">All Locations</option>
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 text-sm font-medium text-stone-700">
          Price Range
          <select
            value={priceRange}
            onChange={(event) => onPriceRangeChange(event.target.value as "all" | "low" | "medium" | "high")}
            className="rounded border border-stone-300 px-3 py-2 font-normal"
          >
            <option value="all">All Prices</option>
            <option value="low">Under ₹50,00,000 / ₹30,000 rent</option>
            <option value="medium">₹50,00,000 - ₹1,00,00,000</option>
            <option value="high">Above ₹1,00,00,000 / ₹50,000 rent</option>
          </select>
        </label>
      </div>
    </section>
  );
}
