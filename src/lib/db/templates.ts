import { getMongoDb } from "@/lib/mongodb";
import { COLLECTIONS, type TemplateDocument } from "@/lib/db/models";

export async function getTemplates() {
  const db = await getMongoDb();
  if (!db) {
    return [] as TemplateDocument[];
  }

  return db.collection<TemplateDocument>(COLLECTIONS.templates).find({}).toArray();
}
