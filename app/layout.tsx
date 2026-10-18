import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfPro = localFont({
  src: [
    {
      path: "./fonts/sf-pro-text_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-text_semibold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-text_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_semibold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
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
    <html lang="en" className={`${sfPro.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#151615] text-white selection:bg-[#A78BFA]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
