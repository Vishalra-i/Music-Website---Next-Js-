"use client";

const demoProducts = [
  {
    id: 1,
    title: "Matte Porcelain Floor Tiles",
    category: "Tiles",
    image:
      "https://images.unsplash.com/photo-1617104551722-3b2d513664f7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Designer Wall Tile Collection",
    category: "Tiles",
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Luxury Faucet & Mixer Set",
    category: "Bathroom Accessories",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Countertop Basin & Mirror Combo",
    category: "Bathroom Accessories",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
  },
];

function FeaturedSection() {
  return (
    <section className="py-14 bg-gray-900" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-teal-500 font-bold tracking-wide uppercase">Demo Products</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Tiles & Bathroom Accessories Gallery
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {demoProducts.map((product) => (
            <article
              key={product.id}
              className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur"
            >
              <img src={product.image} alt={product.title} className="h-60 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-teal-400">{product.category}</p>
                <h3 className="text-xl mt-2 text-white font-semibold">{product.title}</h3>
                <a
                  href="#inquiry"
                  className="inline-block mt-4 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
                >
                  Inquiry Button
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
