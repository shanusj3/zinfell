import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ZINFELL | Digital Solutions & Software Products",
  description:
    "ZINFELL designs and builds enterprise-grade digital solutions, cloud systems, and high-velocity software products, including ZevioDesk.",
  keywords: [
    "ZINFELL",
    "ZevioDesk",
    "Digital Solutions",
    "Enterprise Software",
    "Cloud Architecture",
    "ITSM Helpdesk",
    "Software Engineering",
  ],
  authors: [{ name: "Zinfell" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#A78BFA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className="min-h-screen flex flex-col bg-[#FDFCFC] text-black selection:bg-black/15 selection:text-black font-sans antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
