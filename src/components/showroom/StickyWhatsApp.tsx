import { brand } from "@/components/showroom/data";

export default function StickyWhatsApp() {
  return (
    <a
      href={brand.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg shadow-[#25D366]/40 transition hover:scale-105 hover:bg-[#1fa955]"
    >
      ☎
    </a>
  );
}
