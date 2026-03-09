import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Tile Showroom Demo Platform",
  description:
    "Scalable multi-client tile showroom demos built with Next.js App Router and Tailwind CSS.",
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
