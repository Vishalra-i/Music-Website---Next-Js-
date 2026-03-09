import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AdminEditPage() {
  const authenticated = cookies().get("admin-auth")?.value === "true";
  if (!authenticated) {
    redirect("/admin/login");
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Edit Store Data</h1>
      <p className="mt-3 text-stone-600">Edit support can be extended here. Currently use the store data source and add-store flow.</p>
      <Link href="/admin/dashboard" className="mt-5 inline-block rounded bg-stone-900 px-4 py-2 text-sm font-semibold text-white">
        Back to Dashboard
      </Link>
    </main>
  );
}
