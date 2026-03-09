import Link from "next/link";
import { siteLinks, whatsappWithMessage } from "@/components/site/utils";
import { whatsappMessage } from "@/data/business";

export default function FloatingActions() {
  return (
    <>
      <Link
        href={whatsappWithMessage(whatsappMessage)}
        target="_blank"
        className="fixed bottom-20 right-4 z-50 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600"
      >
        WhatsApp Enquiry
      </Link>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-200 bg-white p-3 sm:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <Link
            href={siteLinks.call}
            className="flex-1 rounded-lg bg-stone-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Call Showroom
          </Link>
          <Link
            href={whatsappWithMessage(whatsappMessage)}
            target="_blank"
            className="flex-1 rounded-lg bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
}
