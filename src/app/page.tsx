import About from "@/components/showroom/About";
import Categories from "@/components/showroom/Categories";
import Contact from "@/components/showroom/Contact";
import Footer from "@/components/showroom/Footer";
import Gallery from "@/components/showroom/Gallery";
import Hero from "@/components/showroom/Hero";
import MapSection from "@/components/showroom/MapSection";
import Navbar from "@/components/showroom/Navbar";
import Products from "@/components/showroom/Products";
import StickyWhatsApp from "@/components/showroom/StickyWhatsApp";
import VideoSection from "@/components/showroom/VideoSection";
import WhyChoose from "@/components/showroom/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f6f6f4] text-stone-900 antialiased">
        <Hero />
        <About />
        <Products />
        <Categories />
        <Gallery />
        <WhyChoose />
        <MapSection />
        <VideoSection />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
