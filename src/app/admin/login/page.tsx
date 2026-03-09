export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md items-center px-4 py-12">
      <form action="/api/admin/login" method="POST" className="w-full rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <p className="mt-2 text-sm text-stone-600">Enter dashboard password</p>
        <input
          name="password"
          type="password"
          required
          className="mt-4 w-full rounded border border-stone-300 px-3 py-2"
          placeholder="Password"
        />
        {searchParams.error && <p className="mt-2 text-sm text-red-600">Incorrect password</p>}
        <button type="submit" className="mt-4 w-full rounded bg-stone-900 px-4 py-2 text-white">
          Login
        </button>
      </form>
    </main>
  );
}
