import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "KAI IT Consultant LTD | Software, AI, Cloud & IT Solutions",
    template: "%s | KAI IT Consultant LTD",
  },
  description: siteConfig.description,
  keywords: [
    "KAI IT Consultant",
    "software development Rwanda",
    "AI solutions",
    "cloud consulting",
    "IT support Kigali",
    "business technology",
  ],
  authors: [{ name: siteConfig.founder.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "KAI IT Consultant LTD | Software, AI, Cloud & IT Solutions",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "KAI IT Consultant LTD | Software, AI, Cloud & IT Solutions",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col bg-kai-bg text-kai-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
