import { getMongoDb } from "@/lib/mongodb";
import { COLLECTIONS, type UserDocument } from "@/lib/db/models";

export async function getUsers() {
  const db = await getMongoDb();
  if (!db) {
    return [] as UserDocument[];
  }

  return db.collection<UserDocument>(COLLECTIONS.users).find({}).toArray();
}
