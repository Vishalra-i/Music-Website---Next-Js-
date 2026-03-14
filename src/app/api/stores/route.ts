import { NextResponse } from "next/server";
import { createStore, deleteStore, getStoreBySlug, getStores, updateStore, type StoreInput } from "@/lib/db/stores";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const store = await getStoreBySlug(slug);
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    return NextResponse.json({ slug, store });
  }

  const stores = await getStores();
  return NextResponse.json({ stores });
}

export async function POST(request: Request) {
  const payload = (await request.json()) as StoreInput;

  if (!payload.slug || !payload.name) {
    return NextResponse.json({ error: "slug and name are required" }, { status: 400 });
  }

  const result = await createStore(payload);
  return NextResponse.json({ slug: payload.slug, source: result.source });
}

export async function PUT(request: Request) {
  const payload = (await request.json()) as { slug?: string; updates?: Partial<StoreInput> };

  if (!payload.slug || !payload.updates) {
    return NextResponse.json({ error: "slug and updates are required" }, { status: 400 });
  }

  const result = await updateStore(payload.slug, payload.updates);
  return NextResponse.json(result);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  const result = await deleteStore(slug);
  return NextResponse.json(result);
}
