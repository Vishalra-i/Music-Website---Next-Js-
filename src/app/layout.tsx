import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royal Tile Studio | Premium Tiles & Interior Surface Showroom",
  description:
    "Royal Tile Studio offers premium floor, wall, bathroom, kitchen, and designer tiles. Call +91 7888731094 and visit our showroom for luxury tile collections.",
  keywords: [
    "Royal Tile Studio",
    "premium tiles showroom",
    "floor tiles",
    "wall tiles",
    "bathroom tiles",
    "kitchen tiles",
    "designer tiles",
  ],
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
