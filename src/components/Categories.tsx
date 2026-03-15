import type { StoreData } from "@/data/stores";

type CategoriesProps = {
  store: StoreData;
};

export default function Categories({ store }: CategoriesProps) {
  return (
    <section id="categories" className="mx-auto w-full max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Tile Categories</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {store.categories.map((category) => (
          <div key={category} className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-stone-800">{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
