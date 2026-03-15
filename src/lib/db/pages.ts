import { getMongoDb } from "@/lib/mongodb";
import { COLLECTIONS, type PageDocument } from "@/lib/db/models";

export async function getPages() {
  const db = await getMongoDb();
  if (!db) {
    return [] as PageDocument[];
  }

  return db.collection<PageDocument>(COLLECTIONS.pages).find({}).toArray();
}

export async function getPageBySlug(slug: string) {
  const db = await getMongoDb();
  if (!db) {
    return null;
  }

  return db.collection<PageDocument>(COLLECTIONS.pages).findOne({ slug });
}
