import Categories from "@/components/Categories";
import ConversionBar from "@/components/ConversionBar";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import ShowroomMap from "@/components/ShowroomMap";
import WhatsappCTA from "@/components/WhatsappCTA";
import type { StoreData } from "@/data/stores";

type TilesTemplateProps = {
  store: StoreData;
};

export default function TilesTemplate({ store }: TilesTemplateProps) {
  return (
    <main>
      <Hero store={store} />

      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="text-2xl font-bold">How customers reach your showroom</h2>
          <p className="mt-2 text-stone-600">Google Search → Website → Tile Selection → WhatsApp Enquiry → Showroom Visit</p>
        </div>
      </section>

      <Categories store={store} />
      <ProductGallery store={store} />
      <ShowroomMap store={store} />

      <section className="bg-white py-12">
        <div className="mx-auto w-full max-w-6xl rounded-xl border border-stone-200 bg-stone-50 p-6">
          <h2 className="text-2xl font-bold">Builders & Contractors</h2>
          <p className="mt-3 text-stone-700">
            Bulk tile supply, contractor partnerships, and project-based support for residential and commercial developments.
          </p>
        </div>
      </section>

      <WhatsappCTA store={store} />
      <ConversionBar store={store} />
    </main>
  );
}
