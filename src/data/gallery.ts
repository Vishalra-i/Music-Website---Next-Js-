export const gallery = {
  tiles: [
    "/images/floor-tiles.svg",
    "/images/wall-tiles.svg",
    "/images/bathroom-tiles.svg",
  ],
  washbasin: ["/images/gallery-1.svg", "/images/gallery-2.svg"],
  bathroomAccessories: ["/images/gallery-2.svg", "/images/gallery-3.svg"],
  sanitaryware: ["/images/gallery-1.svg", "/images/gallery-3.svg"],
  designerTiles: ["/images/kitchen-tiles.svg", "/images/gallery-2.svg"],
  importedTiles: ["/images/gallery-3.svg", "/images/floor-tiles.svg"],
} as const;

export const galleryCategoryMap = [
  { label: "Floor Tiles", key: "tiles" },
  { label: "Wall Tiles", key: "tiles" },
  { label: "Bathroom Tiles", key: "tiles" },
  { label: "Wash Basin", key: "washbasin" },
  { label: "Bathroom Accessories", key: "bathroomAccessories" },
  { label: "Sanitaryware", key: "sanitaryware" },
  { label: "Designer Tiles", key: "designerTiles" },
  { label: "Imported Tiles", key: "importedTiles" },
] as const;
