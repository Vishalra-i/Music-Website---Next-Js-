import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-auth", "", {
    httpOnly: true,
    path: "/",
    secure: false,
    expires: new Date(0),
    sameSite: "lax",
  });

  return response;
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
