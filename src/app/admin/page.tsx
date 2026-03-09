import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AdminRootPage() {
  const authenticated = cookies().get("admin-auth")?.value === "true";
  if (!authenticated) {
    redirect("/admin/login");
  }
  redirect("/admin/dashboard");
}
