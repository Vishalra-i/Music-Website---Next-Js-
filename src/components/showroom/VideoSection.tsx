export default function VideoSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[#9a7b1a]">Video</p>
        <h2 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">Explore Our YouTube Channel</h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-stone-200 shadow-sm">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed?listType=user_uploads&list=UC"
          title="Royal Tile Studio YouTube"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <a
        href="https://www.youtube.com/channel/UC"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-medium text-stone-700 underline underline-offset-4 hover:text-black"
      >
        Visit channel
      </a>
    </section>
  );
}
