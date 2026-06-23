import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/content";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lawn Care & Landscaping in Upton, MA | Spear Outdoor Services",
    template: "%s · Spear Outdoor Services",
  },
  description:
    "Locally owned lawn care & landscaping in Upton, MA. Weekly mowing, mulch installation, and seasonal cleanups. Honest work, fair pricing — free estimates.",
  keywords: [
    "lawn care Upton MA",
    "landscaping Upton MA",
    "weekly mowing",
    "mulch installation",
    "seasonal cleanups",
    "Spear Outdoor Services",
  ],
  openGraph: {
    title: "Spear Outdoor Services — Reliable Lawn Care & Landscaping",
    description:
      "Locally owned lawn care & landscaping for homeowners in Upton, MA & surrounding areas. Free estimates.",
    url: "https://www.spearoutdoorservices.com",
    siteName: "Spear Outdoor Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
