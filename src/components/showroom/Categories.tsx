const categories = [
  {
    title: "Floor Tiles",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bathroom Fittings",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Kitchen Hardware",
    image:
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wall Panels",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold text-stone-800 sm:text-3xl">
          Categories
        </h2>
      </div>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
        {categories.map((category) => (
          <article
            key={category.title}
            className="group relative h-72 min-w-[260px] flex-1 overflow-hidden rounded-2xl shadow-md"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${category.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
            <h3 className="absolute inset-0 flex items-center justify-center text-xl font-medium text-stone-100">
              {category.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
