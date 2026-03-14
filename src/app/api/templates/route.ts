import { NextResponse } from "next/server";
import { getTemplates } from "@/lib/db/templates";

export async function GET() {
  const templates = await getTemplates();
  return NextResponse.json({ templates });
}
