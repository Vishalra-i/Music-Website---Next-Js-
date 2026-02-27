import Image from "next/image";
import Link from "next/link";

const whatsappNumber = "919876543210";
const phoneDisplay = "+91 98765 43210";
const phoneHref = "+919876543210";

const categoryCards = [
  { name: "Floor Tiles", image: "/images/floor-tiles.svg" },
  { name: "Wall Tiles", image: "/images/wall-tiles.svg" },
  { name: "Bathroom Tiles", image: "/images/bathroom-tiles.svg" },
  { name: "Kitchen Tiles", image: "/images/kitchen-tiles.svg" },
];

const galleryImages = [
  "/images/gallery-1.svg",
  "/images/gallery-2.svg",
  "/images/gallery-3.svg",
  "/images/gallery-1.svg",
  "/images/gallery-2.svg",
  "/images/gallery-3.svg",
];

const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20want%20tile%20prices%20for%20my%20project.`;

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section id="home" className="relative min-h-screen scroll-mt-20">
        <Image src="/images/hero-showroom.svg" alt="Tile showroom interior" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/35" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-300/20 px-4 py-1 text-sm font-medium text-amber-100">
              Chandra Tiles Bilaspur
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Premium Tiles in Bilaspur</h1>
            <p className="mt-6 text-lg text-slate-100 sm:text-xl">
              Best quality floor, wall & bathroom tiles for homes and commercial projects
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={whatsappLink}
                target="_blank"
                className="rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                Get Price on WhatsApp
              </Link>
              <Link
                href={`tel:${phoneHref}`}
                className="rounded-full border border-white/60 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-900"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Product Categories</h2>
          <p className="mt-3 text-slate-600">Explore premium options curated for every space.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((category) => (
            <article
              key={category.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image src={category.image} alt={category.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">{category.name}</h3>
                <p className="mt-2 text-sm text-slate-600">Premium quality finishes with modern designs.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {["Trusted local store", "Wide variety of designs", "Affordable pricing", "Bulk order support"].map((point) => (
            <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <p className="mb-2 text-amber-300">✦</p>
              <h3 className="text-lg font-semibold">{point}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Featured Gallery</h2>
          <p className="mt-3 text-slate-600">A glimpse of our showroom and latest tile collections.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={`${image}-${index}`} className="relative h-40 overflow-hidden rounded-2xl shadow-md sm:h-56">
              <Image
                src={image}
                alt={`Tile gallery image ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-100 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-slate-600">Visit our showroom or connect instantly for pricing and stock details.</p>
            <div className="mt-8 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <Link href={`tel:${phoneHref}`} className="text-emerald-700 hover:underline">
                  {phoneDisplay}
                </Link>
              </p>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-emerald-600"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
            <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-slate-500">
              Google Maps Embed Placeholder
            </div>
          </div>
        </div>
      </section>

      <Link
        href={whatsappLink}
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-600"
      >
        WhatsApp
      </Link>
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <Footer />
    </main>
  );
}
