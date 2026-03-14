import Link from "next/link";

type FloatingWhatsappProps = {
  whatsapp: string;
};

export default function FloatingWhatsapp({ whatsapp }: FloatingWhatsappProps) {
  const whatsappLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi, I want to ask for tile price.")}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      className="fixed bottom-5 right-4 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-emerald-400"
    >
      Ask for Tile Price
    </Link>
  );
}
