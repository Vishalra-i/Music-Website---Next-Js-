import Link from "next/link";
import type { StoreData } from "@/data/stores";

type WhatsappCTAProps = {
  store: StoreData;
};

export default function WhatsappCTA({ store }: WhatsappCTAProps) {
  const message = "Hello I saw your tiles online and want more details";
  const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-stone-900 py-14 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 text-center">
        <h2 className="text-2xl font-bold">Ready to get pricing and stock details?</h2>
        <p className="text-stone-300">Share your preferred tile type and area requirement. We will reply fast on WhatsApp.</p>
        <Link href={whatsappUrl} target="_blank" className="rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white">
          Send Enquiry on WhatsApp
        </Link>
      </div>
    </section>
  );
}
