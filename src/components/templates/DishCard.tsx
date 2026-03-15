import type { JSX } from "react";

type DishCardProps = {
  name: string;
  price: string;
  image: string;
};

export default function DishCard({ name, price, image }: DishCardProps): JSX.Element {
  return (
    <article className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="h-48 w-full overflow-hidden bg-stone-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <h4 className="text-base font-semibold text-stone-900">{name}</h4>
        <p className="mt-1 text-sm font-medium text-amber-700">{price}</p>
      </div>
    </article>
  );
}
