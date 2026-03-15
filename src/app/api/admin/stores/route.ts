import { NextResponse } from "next/server";
import { createStore, type StoreInput } from "@/lib/db/stores";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

function validateStorePayload(payload: Partial<StoreInput>) {
  if (!payload.name || !payload.city || !payload.phone || !payload.whatsapp || !payload.address) {
    return "Missing required text fields";
  }

  if (!payload.established || !payload.rating || !Array.isArray(payload.categories) || payload.categories.length === 0) {
    return "Missing required business details";
  }

  return null;
}

function resolveStoreType(type: unknown): "tiles" | "restaurant" {
  return type === "restaurant" ? "restaurant" : "tiles";
}

export async function POST(request: Request) {
  const auth = request.headers.get("cookie")?.includes("admin-auth=true");
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = (await request.json()) as Partial<StoreInput>;
  const validationError = validateStorePayload(payload);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const slug = slugify(payload.name as string);

  const store: StoreInput = {
    slug,
    type: resolveStoreType(payload.type),
    name: payload.name as string,
    city: payload.city as string,
    phone: payload.phone as string,
    whatsapp: payload.whatsapp as string,
    address: payload.address as string,
    rating: payload.rating as string,
    reviews: payload.reviews || "New",
    established: payload.established as string,
    heroImage: payload.heroImage || "/images/hero-showroom.svg",
    categories: payload.categories as string[],
  };

  const result = await createStore(store);
  return NextResponse.json({ slug, source: result.source });
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
