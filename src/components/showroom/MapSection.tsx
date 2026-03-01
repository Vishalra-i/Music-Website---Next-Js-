export default function MapSection() {
  return (
    <section id="map" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9a7b1a]">Location</p>
        <h2 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">Visit Our Showroom</h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-stone-200 shadow-sm">
        <iframe
          title="Royal Tile Studio Map"
          src="https://www.google.com/maps?q=Royal%20Tile%20Studio&output=embed"
          loading="lazy"
          className="h-[380px] w-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href="https://maps.app.goo.gl/d8b3fu3pFSZ7U4rx6"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-medium text-stone-700 underline underline-offset-4 hover:text-black"
      >
        Open exact map link
      </a>
    </section>
  );
}
