import type { StoreData } from "@/data/stores";

type ShowroomMapProps = {
  store: StoreData;
};

export default function ShowroomMap({ store }: ShowroomMapProps) {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(store.address)}&output=embed`;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Showroom Location</h2>
      <p className="mt-2 text-stone-600">{store.address}</p>
      <iframe
        title={`${store.name} map`}
        src={mapEmbed}
        loading="lazy"
        className="mt-6 h-80 w-full rounded-xl border border-stone-200"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
