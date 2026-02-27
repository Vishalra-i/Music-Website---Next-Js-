const aboutImage =
  "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=80";

export default function About() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-2 lg:items-center lg:px-10">
      <div className="overflow-hidden rounded-2xl shadow-md">
        <img
          src={aboutImage}
          alt="Premium tile showroom"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-stone-500">About</p>
        <h2 className="text-3xl font-semibold text-stone-800">Our Showroom</h2>
        <p className="max-w-xl text-lg text-stone-600">
          Trusted tile showroom in Bilaspur offering premium designs and bulk
          supply.
        </p>
      </div>
    </section>
  );
}
