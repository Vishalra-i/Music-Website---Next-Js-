import { tileBrands } from "@/components/demo2/content";

export default function BrandsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-center text-3xl font-semibold text-slate-800 md:text-4xl">Brands We Deal In</h2>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4">
          {tileBrands.map((brand) => (
            <div
              key={brand}
              className="min-w-48 flex-none rounded-xl border border-slate-200 bg-white px-8 py-6 text-center text-lg font-semibold text-slate-700 shadow-sm"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
