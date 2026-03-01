import { brand } from "@/components/showroom/data";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#111111] text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-10">
        <div>
          <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
          <p className="mt-3 text-sm">Tiles & Interior Surface Showroom</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{brand.phone}</li>
            <li>
              <a href={brand.tel} className="hover:text-white">
                Click to Call
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">Social</h4>
          <div className="mt-3 flex gap-3 text-xl">
            <a href="#" aria-label="Instagram" className="hover:text-white">
              📸
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              👍
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              ▶️
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
