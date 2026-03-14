type MongoClientInstance = {
  db: (name: string) => MongoDbInstance;
};

type MongoDbInstance = {
  collection: <T = Record<string, unknown>>(name: string) => MongoCollection<T>;
};

type MongoCollection<T> = {
  find: (query: Record<string, unknown>) => { toArray: () => Promise<T[]> };
  findOne: (query: Record<string, unknown>) => Promise<T | null>;
  createIndex: (spec: Record<string, 1 | -1>, options?: Record<string, unknown>) => Promise<string>;
  updateOne: (
    filter: Record<string, unknown>,
    update: Record<string, unknown>,
    options?: Record<string, unknown>
  ) => Promise<{ matchedCount: number }>;
  deleteOne: (filter: Record<string, unknown>) => Promise<{ deletedCount: number }>;
};

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

declare global {
  // eslint-disable-next-line no-var
  var __mongoClientPromise__: Promise<MongoClientInstance> | undefined;
}

let connectionErrorLogged = false;

async function createClientPromise(): Promise<MongoClientInstance> {
  const loadMongoModule = new Function("return import(\"mongodb\")") as () => Promise<{
    MongoClient: new (connectionString: string) => {
      connect: () => Promise<MongoClientInstance>;
    };
  }>;

  const mongodb = await loadMongoModule();
  const client = new mongodb.MongoClient(uri!);
  return client.connect();
}

export async function getMongoDb(): Promise<MongoDbInstance | null> {
  if (!uri || !dbName) {
    console.warn("MONGODB_URI or MONGODB_DB environment variable is not set. MongoDB will not be used.");
    return null;
  }

  try {
    if (!global.__mongoClientPromise__) {
      global.__mongoClientPromise__ = createClientPromise();
    }

    if (!global.__mongoClientPromise__) {
      return null;
    }

    const client = await global.__mongoClientPromise__;
    console.log("Successfully connected to MongoDB."+`uri: ${uri}, dbName: ${dbName}`);
    return client.db(dbName);
  } catch (error) {
    if (!connectionErrorLogged) {
      connectionErrorLogged = true;
      console.error("MongoDB connection failed, using fallback store.", error);
    }
    console.log("Falling back to in-memory store due to MongoDB connection failure.");
    return null;

  }
}
