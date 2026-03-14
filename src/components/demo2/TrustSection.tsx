import type { Demo2SectionProps } from "@/components/demo2/types";

export default function TrustSection({ store }: Demo2SectionProps) {
  const establishedYear = Number(store.established);
  const yearsExperience = Number.isNaN(establishedYear) ? "10+" : `${Math.max(new Date().getFullYear() - establishedYear, 1)}+`;

  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 text-center md:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-semibold text-slate-900">{yearsExperience}</p>
          <p className="mt-1 text-sm text-slate-500">Years Experience</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-semibold text-slate-900">5000+</p>
          <p className="mt-1 text-sm text-slate-500">Happy Customers</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-semibold text-slate-900">1000+</p>
          <p className="mt-1 text-sm text-slate-500">Tile Designs</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-semibold text-slate-900">⭐ {store.rating}</p>
          <p className="mt-1 text-sm text-slate-500">Google Rating</p>
        </div>
      </div>
    </section>
  );
}
