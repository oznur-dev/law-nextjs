import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import {
  generateOpenGraph,
  generateTwitterCard,
  generateLegalServiceSchema,
  baseUrl,
} from "@/lib/seo";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s - ${siteConfig.firm.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.lawyer.name }],
  creator: siteConfig.firm.name,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: generateOpenGraph({
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  }),
  twitter: generateTwitterCard({
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLegalServiceSchema()),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
