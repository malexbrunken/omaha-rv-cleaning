import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer, MobileCallBar } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Omaha RV Cleaning Co. | RV, Camper & Trailer Cleaning in Omaha, NE",
    template: "%s | Omaha RV Cleaning Co.",
  },
  description: site.description,
  keywords: [
    "RV cleaning Omaha",
    "RV detailing Omaha",
    "camper cleaning service Omaha NE",
    "mobile RV wash Omaha",
    "RV interior cleaning",
    "RV steam sanitizing",
    "RV mattress cleaning Omaha",
    "Elkhorn RV cleaning",
    "Valley NE RV detailing",
  ],
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="flex flex-col min-h-screen pb-16 md:pb-0">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
