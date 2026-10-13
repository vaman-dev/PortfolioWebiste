import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Apoorva | Unity Gameplay Programmer",
    template: "%s | Apoorva",
  },
  description:
    "Unity gameplay programmer building responsive player systems, modular gameplay architecture, and AI-powered interactive experiences.",
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
