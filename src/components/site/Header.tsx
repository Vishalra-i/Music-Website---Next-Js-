import Link from "next/link";
import { cookies } from "next/headers";

export default function Header() {
  const isAdminLoggedIn = cookies().get("admin-auth")?.value === "true";

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-stone-900">
            Vr Web Solution
        </Link>
        {isAdminLoggedIn ? (
          <nav className="flex items-center gap-2 text-sm font-medium text-stone-700">
            <Link href="/demo" className="rounded-full px-3 py-1.5 hover:bg-stone-100">
              All Demos
            </Link>
            <Link href="/admin" className="rounded-full px-3 py-1.5 hover:bg-stone-100">
              Admin
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
