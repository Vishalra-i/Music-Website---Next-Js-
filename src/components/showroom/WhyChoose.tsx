import { whyChooseUs } from "@/components/showroom/data";

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9a7b1a]">Why Choose Us</p>
        <h2 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">Built for Premium Spaces</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {whyChooseUs.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-3xl" aria-hidden>
              {item.icon}
            </span>
            <h3 className="mt-3 text-base font-semibold text-stone-900">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
