import BrandsSection from "@/components/demo2/BrandsSection";
import ContactSection from "@/components/demo2/ContactSection";
import FloatingWhatsapp from "@/components/demo2/FloatingWhatsapp";
import HeroSection from "@/components/demo2/HeroSection";
import InquiryForm from "@/components/demo2/InquiryForm";
import RoomInspiration from "@/components/demo2/RoomInspiration";
import TileCategories from "@/components/demo2/TileCategories";
import TrendingTiles from "@/components/demo2/TrendingTiles";
import TrustSection from "@/components/demo2/TrustSection";
import type { StoreData } from "@/data/stores";

type TilesModernTemplateProps = {
  store: StoreData;
  slug: string;
};

export default function TilesModernTemplate({ store, slug }: TilesModernTemplateProps) {
  return (
    <main className="bg-slate-50 font-sans text-slate-900">
      <HeroSection store={store} slug={slug} />
      <TileCategories />
      <TrendingTiles />
      <RoomInspiration />
      <TrustSection store={store} slug={slug} />
      <BrandsSection />
      <InquiryForm whatsapp={store.whatsapp} />
      <ContactSection store={store} slug={slug} />
      <FloatingWhatsapp whatsapp={store.whatsapp} />
    </main>
  );
}
