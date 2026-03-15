import { unstable_cache } from "next/cache";
import { getStoreType, getStores as getLegacyStores, saveRuntimeStore, type StoreData } from "@/data/stores";
import { getMongoDb } from "@/lib/mongodb";
import { COLLECTIONS, type StoreDocument } from "@/lib/db/models";

export type StoreInput = StoreData & { slug: string };

function toStoreData(document: StoreDocument): StoreData {
  return {
    type: getStoreType(document),
    name: document.name,
    city: document.city,
    phone: document.phone,
    whatsapp: document.whatsapp,
    address: document.address,
    rating: document.rating,
    reviews: document.reviews,
    established: document.established,
    heroImage: document.heroImage,
    categories: document.categories,
  };
}

export async function ensureStoreIndexes() {
  const db = await getMongoDb();
  if (!db) {
    return;
  }

  await db.collection<StoreDocument>(COLLECTIONS.stores).createIndex({ slug: 1 }, { unique: true, name: "slug_unique_idx" });
}

async function getStoresFromMongo(): Promise<Record<string, StoreData>> {
  const db = await getMongoDb();
  if (!db) {
    return {};
  }

  await ensureStoreIndexes();
  const docs = await db.collection<StoreDocument>(COLLECTIONS.stores).find({}).toArray();

  if (docs.length === 0) {
    return {};
  }

  return docs.reduce<Record<string, StoreData>>((acc, doc) => {
    acc[doc.slug] = toStoreData(doc);
    return acc;
  }, {});
}

const getStoresCached = unstable_cache(
  async () => {
    const mongoStores = await getStoresFromMongo();
    if (Object.keys(mongoStores).length > 0) {
      return mongoStores;
    }

    return getLegacyStores();
  },
  ["stores-list"],
  { revalidate: 60 }
);

export async function getStores() {
  return getStoresCached();
}

export async function getStoreBySlug(slug: string) {
  const stores = await getStores();
  return stores[slug] ?? null;
}

export async function createStore(input: StoreInput) {
  const normalizedInput: StoreInput = {
    ...input,
    type: getStoreType(input),
  };

  const db = await getMongoDb();
  if (!db) {
    await saveRuntimeStore(normalizedInput.slug, normalizedInput);
    return { slug: normalizedInput.slug, source: "fallback" as const };
  }

  await ensureStoreIndexes();
  const now = new Date();

  await db.collection<StoreDocument>(COLLECTIONS.stores).updateOne(
    { slug: input.slug },
    {
      $set: {
        ...normalizedInput,
        updatedAt: now,
      },
      $setOnInsert: {
        createdAt: now,
      },
    },
    { upsert: true }
  );

  return { slug: normalizedInput.slug, source: "mongodb" as const };
}

export async function updateStore(idOrSlug: string, updates: Partial<StoreData>) {
  const db = await getMongoDb();

  if (!db) {
    const legacyStores = await getLegacyStores();
    const existing = legacyStores[idOrSlug];

    if (!existing) {
      return { matched: 0, source: "fallback" as const };
    }

    await saveRuntimeStore(idOrSlug, { ...existing, ...updates });
    return { matched: 1, source: "fallback" as const };
  }

  await ensureStoreIndexes();

  const result = await db.collection<StoreDocument>(COLLECTIONS.stores).updateOne(
    { slug: idOrSlug },
    {
      $set: {
        ...updates,
        updatedAt: new Date(),
      },
    }
  );

  return { matched: result.matchedCount, source: "mongodb" as const };
}

export async function deleteStore(idOrSlug: string) {
  const db = await getMongoDb();
  if (!db) {
    return { deleted: 0, source: "fallback" as const };
  }

  await ensureStoreIndexes();
  const result = await db.collection<StoreDocument>(COLLECTIONS.stores).deleteOne({ slug: idOrSlug });
  return { deleted: result.deletedCount, source: "mongodb" as const };
}
