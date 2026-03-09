import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  const authenticated = cookies().get("admin-auth")?.value === "true";
  if (authenticated) {
    redirect("/admin/dashboard");
  }

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md items-center px-4 py-12">
      <LoginForm />
    </main>
  );
}
