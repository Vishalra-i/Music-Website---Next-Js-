export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="rounded-3xl bg-stone-900 px-6 py-10 text-center text-stone-100 shadow-xl sm:px-10">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Contact us for best price
        </h2>
        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/919999999999"
            className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="tel:+919999999999"
            className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:bg-stone-100 hover:text-stone-900"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
