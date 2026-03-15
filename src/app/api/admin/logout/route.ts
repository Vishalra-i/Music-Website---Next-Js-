import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-auth", "", {
    path: "/",
    expires: new Date(0),
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  return response;
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
