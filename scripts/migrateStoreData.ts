import { getStores as getLegacyStores } from "@/data/stores";
import { createStore, ensureStoreIndexes } from "@/lib/db/stores";

async function run() {
  const stores = await getLegacyStores();
  const entries = Object.entries(stores);

  if (entries.length === 0) {
    console.log("No legacy stores found to migrate.");
    return;
  }

  await ensureStoreIndexes();

  for (const [slug, store] of entries) {
    await createStore({ slug, ...store });
    console.log(`Migrated store: ${slug}`);
  }

  console.log(`Migration completed. Migrated ${entries.length} stores.`);
}

run().catch((error) => {
  console.error("Store migration failed", error);
  process.exit(1);
});
