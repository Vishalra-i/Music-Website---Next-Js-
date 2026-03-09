import { businessData } from "@/data/business";

export const siteLinks = {
  whatsapp: `https://wa.me/${businessData.whatsapp}`,
  call: `tel:${businessData.phone}`,
};

export const whatsappWithMessage = (message: string) =>
  `${siteLinks.whatsapp}?text=${encodeURIComponent(message)}`;
