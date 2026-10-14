import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { absoluteUrl, isProductionIndexable } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Apoorva Sharma — Unity Gameplay Programmer",
    template: "%s | Apoorva Sharma",
  },
  description:
    "Apoorva Sharma is a Unity Gameplay Programmer building gameplay systems, interactive AI, character controllers, and XR experiences.",
  metadataBase: new URL(absoluteUrl()),
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: "Apoorva Sharma",
    title: "Apoorva Sharma — Unity Gameplay Programmer",
    description:
      "Gameplay systems, interactive AI, character controllers, and XR experiences built with Unity.",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Apoorva Sharma — Unity Gameplay Programmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoorva Sharma — Unity Gameplay Programmer",
    description:
      "Gameplay systems, interactive AI, character controllers, and XR experiences built with Unity.",
    images: [absoluteUrl("/opengraph-image")],
  },
  robots: isProductionIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="min-w-0 flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
