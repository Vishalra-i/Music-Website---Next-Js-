import { NextResponse } from "next/server";
import { getPageBySlug, getPages } from "@/lib/db/pages";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const page = await getPageBySlug(slug);
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    return NextResponse.json({ page });
  }

  const pages = await getPages();
  return NextResponse.json({ pages });
}
