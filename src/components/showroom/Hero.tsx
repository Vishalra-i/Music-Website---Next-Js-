import { brand } from "@/components/showroom/data";

const heroImage =
  "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=2000&q=80";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-10">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-stone-200 sm:text-sm">
            Tiles & Interior Surface Showroom
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Transform Your Space with Premium Tiles
          </h1>
          <p className="mt-4 text-base text-stone-200 sm:text-xl">
            Explore Luxury Designs at Royal Tile Studio
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={brand.tel}
              className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e5be43]"
            >
              Call Now
            </a>
            <a
              href="#map"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              Visit Showroom
            </a>
          </div>

          <p className="mt-6 text-sm font-medium text-stone-200">{brand.phone}</p>
        </div>
      </div>
    </section>
  );
}
