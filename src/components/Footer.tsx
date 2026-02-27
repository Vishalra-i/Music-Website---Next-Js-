function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
        <div id="inquiry" className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Product Inquiry</h3>
          <p className="text-sm text-gray-400">
            Send us your requirements for tiles, sanitaryware, and bathroom accessories. Our team
            will get back to you quickly with pricing and availability.
          </p>
          <a
            href="mailto:demo@tileworld.com?subject=Product%20Inquiry"
            className="inline-block px-5 py-3 rounded-lg bg-teal-500 text-black font-semibold hover:bg-teal-400 transition"
          >
            Inquiry Button
          </a>
          <p className="text-xs text-gray-500">Email: demo@tileworld.com | Phone: +91 98765 43210</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Google Maps Location</h3>
          <div className="rounded-xl overflow-hidden border border-white/20">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps?q=23.0225,72.5714&output=embed"
              width="100%"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://share.google/YNnMHBEwrX9RXss3R"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-teal-400 hover:text-teal-300 text-sm"
          >
            Open shared Google Maps link
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
