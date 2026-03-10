import { promises as fs } from "node:fs";
import path from "node:path";

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
  categories: string[];
};

export const baseStores: Record<string, StoreData> = {
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
    categories: [
      "Floor Tiles",
      "Wall Tiles",
      "Bathroom Tiles",
      "Wash Basin",
      "Bathroom Accessories",
      "Sanitaryware",
      "Designer Tiles",
      "Imported Tiles",
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
    categories: [
      "Floor Tiles",
      "Wall Tiles",
      "Bathroom Tiles",
      "Wash Basin",
      "Bathroom Accessories",
      "Sanitaryware",
      "Designer Tiles",
      "Imported Tiles",
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
    categories: [
      "Floor Tiles",
      "Wall Tiles",
      "Bathroom Tiles",
      "Wash Basin",
      "Bathroom Accessories",
      "Sanitaryware",
      "Designer Tiles",
      "Imported Tiles",
    ],
  },
};

const projectRuntimePath = path.join(
  process.cwd(),
  "src/data/stores.runtime.json"
);

const tempRuntimePath = path.join(
  process.env.TMPDIR || "/tmp",
  "stores.runtime.json"
);

const runtimePath =
  process.env.STORES_RUNTIME_PATH ||
  (process.env.VERCEL || process.env.LAMBDA_TASK_ROOT
    ? tempRuntimePath
    : projectRuntimePath);

export async function getStores(): Promise<Record<string, StoreData>> {
  try {
    const file = await fs.readFile(runtimePath, "utf-8");
    const runtimeStores = JSON.parse(file) as Record<string, StoreData>;
    return { ...baseStores, ...runtimeStores };
  } catch {
    return baseStores;
  }
}

export async function saveRuntimeStore(slug: string, store: StoreData) {
  const current = await getStores();
  const runtimeOnly = Object.fromEntries(
    Object.entries(current).filter(([key]) => !(key in baseStores))
  );
  runtimeOnly[slug] = store;
  await fs.mkdir(path.dirname(runtimePath), { recursive: true });
  await fs.writeFile(runtimePath, JSON.stringify(runtimeOnly, null, 2));
}
