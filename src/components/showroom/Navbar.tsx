import { brand } from "@/components/showroom/data";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <a href="#home" className="text-base font-semibold tracking-wide text-white sm:text-lg">
          {brand.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-200 transition hover:text-[#d4af37]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={brand.tel}
          className="rounded-full border border-[#d4af37] px-4 py-2 text-xs font-semibold text-[#f6deb0] transition hover:bg-[#d4af37] hover:text-black sm:text-sm"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
