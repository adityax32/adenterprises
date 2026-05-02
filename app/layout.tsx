import type { Metadata } from "next";
import { Krona_One, Kumbh_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["900"],
});

const kronaOne = Krona_One({
  variable: "--font-krona-one",
  subsets: ["latin"],
  weight: ["400"],
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ad-enterprises.example"),
  title: "AD Enterprises | High-Quality Mining & Logistics",
  description:
    "AD Enterprises delivers mining operations, overburden removal, coal handling, flyash transportation, rack loading, and industrial logistics across Chhattisgarh.",
  keywords: [
    "AD Enterprises",
    "Mining logistics",
    "Coal mining contractor",
    "Overburden removal",
    "Flyash transportation",
    "Chhattisgarh mining services",
  ],
  openGraph: {
    title: "AD Enterprises | High-Quality Mining & Logistics",
    description:
      "Trusted mining and logistics partner for overburden cutting, coal mining, blasting, haulage, and infrastructure support.",
    images: ["/assets/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${kronaOne.variable} ${kumbhSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
