import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AddStoreForm from "@/components/admin/AddStoreForm";
import LogoutButton from "@/components/admin/LogoutButton";
import { getStores } from "@/lib/db/stores";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const authenticated = cookies().get("admin-auth")?.value === "true";
  if (!authenticated) {
    redirect("/admin/login");
  }

  const stores = await getStores();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2">
          <Link href="/admin/create" className="rounded bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900">
            Create New Demo
          </Link>
          <LogoutButton />
        </div>
      </div>

      <section className="mt-6 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="bg-stone-100 text-stone-700">
            <tr>
              <th className="px-4 py-3">Store Name</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Demo URL</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(stores).map(([slug, store]) => (
              <tr key={slug} className="border-t border-stone-200">
                <td className="px-4 py-3">{store.name}</td>
                <td className="px-4 py-3">{store.city}</td>
                <td className="px-4 py-3">{store.phone}</td>
                <td className="px-4 py-3">/demo/{slug}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Link href={`/demo/${slug}`} className="rounded bg-stone-900 px-3 py-1.5 text-xs font-semibold text-white">
                      View Demo
                    </Link>
                    <Link href={`/admin/edit?store=${slug}`} className="rounded bg-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-800">
                      Edit Data
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <AddStoreForm />
    </main>
  );
}
