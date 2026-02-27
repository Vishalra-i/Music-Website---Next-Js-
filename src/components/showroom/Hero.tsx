const heroImage =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/25" />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-end px-6 pb-16 pt-28 sm:items-center sm:pb-20 lg:px-10">
        <div className="max-w-2xl text-white animate-fade-up">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-stone-200">
            Premium Showroom Experience
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Premium Tiles &amp; Interiors
          </h1>
          <p className="mt-4 max-w-xl text-base text-stone-200 sm:text-lg">
            Transform Your Space with Quality Designs
          </p>
          <a
            href="#products"
            className="mt-8 inline-flex rounded-full bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-900 shadow-lg shadow-black/25 transition hover:bg-white"
          >
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
