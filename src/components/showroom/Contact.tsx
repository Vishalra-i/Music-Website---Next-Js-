import { brand } from "@/components/showroom/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <div className="rounded-3xl bg-black px-6 py-12 text-center text-white shadow-xl sm:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">Contact</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to Upgrade Your Space?</h2>
        <p className="mt-3 text-stone-300">Call us now for premium tile consultation and best showroom pricing.</p>
        <p className="mt-4 text-lg font-semibold text-white">{brand.phone}</p>

        <a
          href={brand.tel}
          className="mt-8 inline-flex rounded-full bg-[#d4af37] px-8 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e5be43]"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}
