import Link from "next/link";
import type { StoreData } from "@/data/stores";

type ConversionBarProps = {
  store: StoreData;
};

const message = "Hello, I saw your tile showroom online and want more information.";

export default function ConversionBar({ store }: ConversionBarProps) {
  const whatsappUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Link
        href={whatsappUrl}
        target="_blank"
        className="fixed bottom-20 right-4 z-50 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg"
      >
        WhatsApp Enquiry
      </Link>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-200 bg-white p-3 sm:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <Link href={`tel:${store.phone}`} className="flex-1 rounded-md bg-stone-900 py-3 text-center text-sm font-semibold text-white">
            Call Now
          </Link>
          <Link href={whatsappUrl} target="_blank" className="flex-1 rounded-md bg-green-500 py-3 text-center text-sm font-semibold text-white">
            WhatsApp
          </Link>
        </div>
      </div>

      <div className="sticky bottom-0 z-40 hidden border-t border-stone-200 bg-white/95 p-3 backdrop-blur sm:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <p className="text-sm text-stone-700">Talk to {store.name} for tile selection and project pricing.</p>
          <Link href={whatsappUrl} target="_blank" className="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white">
            Instant WhatsApp Enquiry
          </Link>
        </div>
      </div>
    </>
  );
}
