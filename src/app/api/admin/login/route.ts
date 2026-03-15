import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);
  const password = formData?.get("password");

  if (password !== "7492") {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("admin-auth", "true", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: false,
  });

  return response;
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
