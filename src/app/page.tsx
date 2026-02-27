import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <Footer />
    </main>
  );
}
