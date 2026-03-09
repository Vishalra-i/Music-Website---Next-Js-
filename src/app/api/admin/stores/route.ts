import { NextResponse } from "next/server";
import { saveRuntimeStore, type StoreData } from "@/data/stores";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export async function POST(request: Request) {
  const auth = request.headers.get("cookie")?.includes("admin-auth=true");
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = (await request.json()) as Omit<StoreData, "heroImage"> & {
    heroImage?: string;
    reviews?: string;
  };

  const slug = slugify(payload.name);

  const store: StoreData = {
    name: payload.name,
    city: payload.city,
    phone: payload.phone,
    whatsapp: payload.whatsapp,
    address: payload.address,
    rating: payload.rating,
    reviews: payload.reviews || "New",
    established: payload.established,
    heroImage: payload.heroImage || "/images/hero-showroom.svg",
    categories: payload.categories,
  };

  await saveRuntimeStore(slug, store);
  return NextResponse.json({ slug });
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
