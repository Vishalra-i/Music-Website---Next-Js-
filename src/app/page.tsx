import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestiminoalCard from "@/components/TestiminoalCard";
import Upcoming from "@/components/Upcoming";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <HeroSection/>
          <FeaturedSection/>
          <WhyChooseUs/>
          <TestiminoalCard/>
          <Upcoming/>
          <Instructor/>
          <Footer/>
    </main>
  );
}
