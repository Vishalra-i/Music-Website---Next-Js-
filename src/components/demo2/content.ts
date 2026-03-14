import type { RoomInspirationItem, TileCategory, TrendingTile } from "@/components/demo2/types";

export const tileCategories: TileCategory[] = [
  { name: "Floor Tiles", image: "/images/floortiles.png" },
  { name: "Wall Tiles", image: "/images/wall-tiles.svg" },
  { name: "Bathroom Tiles", image: "/images/bathroomtiles.png" },
  { name: "Kitchen Tiles", image: "/images/kitchen-tiles.svg" },
  { name: "Outdoor Tiles", image: "/images/gallery-1.svg" },
  { name: "Parking Tiles", image: "/images/floortiles2.png" },
];

export const trendingTiles: TrendingTile[] = [
  { name: "Calacatta Luxe", size: "800 x 1600 mm", image: "/images/gallery-1.svg" },
  { name: "Urban Concrete", size: "600 x 1200 mm", image: "/images/gallery-2.svg" },
  { name: "Soft Travertine", size: "600 x 600 mm", image: "/images/gallery-3.svg" },
  { name: "Nordic Pearl", size: "300 x 600 mm", image: "/images/floortiles.png" },
  { name: "Charcoal Stone", size: "800 x 800 mm", image: "/images/floortiles2.png" },
  { name: "Aqua Vein", size: "600 x 1200 mm", image: "/images/bathroomtiles.png" },
];

export const roomInspiration: RoomInspirationItem[] = [
  { title: "Living Room", image: "/images/hero-showroom.svg" },
  { title: "Bathroom", image: "/images/bathroomtiles.png" },
  { title: "Kitchen", image: "/images/kitchen-tiles.svg" },
  { title: "Bedroom", image: "/images/gallery-3.svg" },
];

export const tileBrands = ["Kajaria", "Somany", "Johnson", "Asian Granito", "Nitco"];
