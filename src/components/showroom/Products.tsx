const products = [
  {
    name: "Ivory Marble Tile",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Beige Stone Finish",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Wood Texture Plank",
    image:
      "https://images.unsplash.com/photo-1616594039964-3f5b3e4f7d0e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Concrete Matte Tile",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Glossy Onyx Series",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Travertine Classic",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Modern Mosaic",
    image:
      "https://images.unsplash.com/photo-1616593969747-4797dc75033e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Satin Ceramic Tile",
    image:
      "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
      <h2 className="mb-8 text-2xl font-semibold text-stone-800 sm:text-3xl">
        Featured Products
      </h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.name}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-stone-700 sm:text-base">
                {product.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
