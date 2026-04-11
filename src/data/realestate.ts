export type PropertyListing = {
  id: string;
  title: string;
  price: number;
  location: string;
  type: "buy" | "rent";
  image: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const propertyListings: PropertyListing[] = [
  {
    id: "sunrise-villa",
    title: "Sunrise Villa",
    price: 18500000,
    location: "Surat",
    type: "buy",
    image: "/images/gallery-1.svg",
    description: "4 BHK premium villa with private garden, covered parking, and clubhouse access.",
  },
  {
    id: "urban-heights",
    title: "Urban Heights Apartment",
    price: 42000,
    location: "Ahmedabad",
    type: "rent",
    image: "/images/gallery-2.svg",
    description: "Fully furnished 2 BHK apartment near metro and business district with security.",
  },
  {
    id: "green-avenue",
    title: "Green Avenue Residency",
    price: 9600000,
    location: "Vadodara",
    type: "buy",
    image: "/images/gallery-3.svg",
    description: "3 BHK flat in gated community with gym, pool, and landscaped common areas.",
  },
  {
    id: "lakeview-suites",
    title: "Lakeview Suites",
    price: 58000,
    location: "Surat",
    type: "rent",
    image: "/images/hero-showroom.svg",
    description: "Spacious 3 BHK rental with balcony views, modular kitchen, and premium finishes.",
  },
  {
    id: "oakwood-township",
    title: "Oakwood Township",
    price: 12400000,
    location: "Ahmedabad",
    type: "buy",
    image: "/images/wall-tiles.svg",
    description: "Modern townhouse in a family-friendly township with 24/7 maintenance and parks.",
  },
  {
    id: "cityline-studio",
    title: "Cityline Studio",
    price: 25000,
    location: "Vadodara",
    type: "rent",
    image: "/images/kitchen-tiles.svg",
    description: "Compact studio apartment ideal for professionals, close to transit and shopping hubs.",
  },
];

export const realEstateTestimonials: Testimonial[] = [
  {
    name: "Riya Shah",
    role: "Home Buyer",
    quote: "PrimeNest helped us shortlist genuine options quickly and handled negotiation smoothly.",
  },
  {
    name: "Ankit Mehta",
    role: "Property Investor",
    quote: "Clear pricing, fast site visit scheduling, and strong market insights for high-return locations.",
  },
  {
    name: "Neha Patel",
    role: "Tenant",
    quote: "I found a rental in two days with complete paperwork support and responsive agent follow-up.",
  },
];

export const realEstateGalleryImages = [
  "/images/hero-showroom.svg",
  "/images/gallery-1.svg",
  "/images/gallery-2.svg",
  "/images/gallery-3.svg",
  "/images/wall-tiles.svg",
  "/images/kitchen-tiles.svg",
];
