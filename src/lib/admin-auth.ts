import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function isAdminAuthenticated() {
  return cookies().get("admin-auth")?.value === "true";
}

export function requireAdminAuth() {
  if (!isAdminAuthenticated()) {
    redirect("/admin/login");
  }
}
