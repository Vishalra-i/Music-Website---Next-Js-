import type { Metadata } from "next";
import RealEstateTemplate from "@/components/templates/RealEstateTemplate";
import type { StoreData } from "@/data/stores";

export const metadata: Metadata = {
  title: "Real Estate Demo | VR Web Solution",
  description: "Modern real estate demo with property filters, listings, and WhatsApp inquiry flow.",
};

const realEstateDemoStore: StoreData = {
  type: "realestate",
  name: "PrimeNest Realty",
  city: "Surat",
  phone: "+919999999999",
  whatsapp: "919999999999",
  address: "Ring Road, Surat, Gujarat",
  rating: "4.9",
  reviews: "150+",
  established: "2015",
  heroImage: "/images/hero-showroom.svg",
  categories: ["Apartment", "Villa", "Commercial", "Plot", "Rental"],
};

export default function RealEstateDemoPage() {
  return <RealEstateTemplate store={realEstateDemoStore} />;
}
