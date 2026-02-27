import About from "@/components/showroom/About";
import Categories from "@/components/showroom/Categories";
import Contact from "@/components/showroom/Contact";
import Hero from "@/components/showroom/Hero";
import Products from "@/components/showroom/Products";
import StickyWhatsApp from "@/components/showroom/StickyWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-stone-900 antialiased">
      <Hero />
      <Categories />
      <Products />
      <About />
      <Contact />
      <StickyWhatsApp />
    </main>
  );
}
