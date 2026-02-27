import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandra Tiles Bilaspur | Premium Tiles Showroom",
  description:
    "Discover premium floor, wall, bathroom, and kitchen tiles at Chandra Tiles Bilaspur. Get quick pricing on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
