import { MongoClient, Db, Collection } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("Please define MONGODB_URI");
}

if (!dbName) {
  throw new Error("Please define MONGODB_DB");
}

declare global {
  // eslint-disable-next-line no-var
  var __mongoClientPromise__: Promise<MongoClient> | undefined;
}

let connectionErrorLogged = false;

async function createClientPromise(): Promise<MongoClient> {
  const client = new MongoClient(uri!);
  await client.connect();
  return client;
}

export async function getMongoDb(): Promise<Db | null> {
  try {
    if (!global.__mongoClientPromise__) {
      global.__mongoClientPromise__ = createClientPromise();
    }

    const client = await global.__mongoClientPromise__;

    console.log(`✅ Connected to MongoDB | DB: ${dbName}`);

    return client.db(dbName);
  } catch (error) {
    if (!connectionErrorLogged) {
      connectionErrorLogged = true;
      console.error("MongoDB connection failed", error);
    }

    return null;
  }
}