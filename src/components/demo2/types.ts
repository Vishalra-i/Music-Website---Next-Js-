import type { StoreData } from "@/data/stores";

export type Demo2SectionProps = {
  store: StoreData;
  slug: string;
};

export type TileCategory = {
  name: string;
  image: string;
};

export type TrendingTile = {
  name: string;
  size: string;
  image: string;
};

export type RoomInspirationItem = {
  title: string;
  image: string;
};
