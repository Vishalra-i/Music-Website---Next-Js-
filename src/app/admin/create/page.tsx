import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AddStoreForm from "@/components/admin/AddStoreForm";

export const dynamic = "force-dynamic";

export default function AdminCreatePage() {
  const authenticated = cookies().get("admin-auth")?.value === "true";
  if (!authenticated) {
    redirect("/admin/login");
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Create Store Demo</h1>
        <Link href="/admin/dashboard" className="rounded bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900">
          Back to Dashboard
        </Link>
      </div>
      <AddStoreForm />
    </main>
  );
}
