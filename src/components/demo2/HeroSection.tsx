import Link from "next/link";
import type { Demo2SectionProps } from "@/components/demo2/types";

export default function HeroSection({ store }: Demo2SectionProps) {
  const whatsappLink = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(`Hi ${store.name}, I would like to explore premium tile designs.`)}`;

  return (
    <section
      className="relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-slate-900 px-4 py-24 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.8)), url(${store.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-4xl text-center animate-fade-up">
        <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-100">
          Premium Showroom Experience
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{store.name} – The Tiles Shop</h1>
        <p className="mt-5 text-base text-slate-100 md:text-xl">Premium Tiles &amp; Sanitary Showroom</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tile-categories"
            className="rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-indigo-400"
          >
            Explore Designs
          </a>
          <Link
            href={whatsappLink}
            target="_blank"
            className="rounded-full border border-white/60 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/20"
          >
            WhatsApp Inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
