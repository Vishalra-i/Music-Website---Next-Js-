"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.set("password", password);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      setError("Incorrect password");
      setLoading(false);
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <p className="mt-2 text-sm text-stone-600">Enter dashboard password</p>
      <input
        name="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        className="mt-4 w-full rounded border border-stone-300 px-3 py-2"
        placeholder="Password"
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className="mt-4 w-full rounded bg-stone-900 px-4 py-2 text-white disabled:opacity-70">
        {loading ? "Signing in..." : "Login"}
      </button>
    </form>
  );
}
