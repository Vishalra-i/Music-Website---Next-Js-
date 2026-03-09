export type StoreData = {
  name: string;
  city: string;
  phone: string;
  whatsapp: string;
  address: string;
  rating: string;
  reviews: string;
  established: string;
  heroImage: string;
  mapEmbed: string;
  categories: string[];
};

export const stores: Record<string, StoreData> = {
  "selection-zone": {
    name: "Selection Zone Tiles & Sanitary",
    city: "Surat",
    phone: "+919925138956",
    whatsapp: "9925138956",
    address: "Udhna-Magdala Road, Surat, Gujarat",
    rating: "4.8",
    reviews: "500+",
    established: "2009",
    heroImage: "/images/hero-showroom.svg",
    mapEmbed:
      "https://www.google.com/maps?q=Udhna-Magdala%20Road%2C%20Surat%2C%20Gujarat&output=embed",
    categories: [
      "Floor Tiles",
      "Wall Tiles",
      "Bathroom Tiles",
      "Sanitaryware",
      "Imported Tiles",
      "Ceramic Tiles",
    ],
  },
  "patel-tiles": {
    name: "Patel Tiles Gallery",
    city: "Ahmedabad",
    phone: "+919825011223",
    whatsapp: "9825011223",
    address: "SG Highway, Ahmedabad, Gujarat",
    rating: "4.7",
    reviews: "320+",
    established: "2012",
    heroImage: "/images/gallery-2.svg",
    mapEmbed:
      "https://www.google.com/maps?q=SG%20Highway%2C%20Ahmedabad%2C%20Gujarat&output=embed",
    categories: [
      "Vitrified Tiles",
      "Outdoor Tiles",
      "Kitchen Tiles",
      "Designer Wall Tiles",
      "Sanitaryware",
      "Ceramic Tiles",
    ],
  },
  "royal-ceramics": {
    name: "Royal Ceramics Studio",
    city: "Vadodara",
    phone: "+919725554466",
    whatsapp: "9725554466",
    address: "Alkapuri, Vadodara, Gujarat",
    rating: "4.9",
    reviews: "410+",
    established: "2010",
    heroImage: "/images/gallery-3.svg",
    mapEmbed:
      "https://www.google.com/maps?q=Alkapuri%2C%20Vadodara%2C%20Gujarat&output=embed",
    categories: [
      "Floor Tiles",
      "Bathroom Tiles",
      "Imported Tiles",
      "Marble Finish Tiles",
      "Ceramic Tiles",
      "Parking Tiles",
    ],
  },
};
