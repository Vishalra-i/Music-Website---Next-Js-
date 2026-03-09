import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Tile Showroom Website",
  description: "Production-ready tile showroom websites with dynamic store routing, SEO, and conversion features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-50 font-sans text-stone-900 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
