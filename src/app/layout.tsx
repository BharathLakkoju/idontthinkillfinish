import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftMedia - 100% Secure & Private Media Tools",
  description: "Fast, secure, and 100% client-side PDF and media tools. Merge PDF, Image to PDF, Compress PDF, Video, and Image without uploading files to any server.",
  keywords: "SwiftMedia, Free Online PDF Tools, PDF Tools Free, PDF Converter Online, Secure PDF Tools, Merge PDF, Compress PDF, Image to PDF, Compress Video",
  icons: {
    icon: "/logo.ico",
  },
  openGraph: {
    title: "SwiftMedia - 100% Secure & Private Media Tools",
    description: "Fast, secure, and 100% client-side PDF and media tools. Process your files locally without uploads.",
    url: "https://swiftmedia.cc",
    siteName: "SwiftMedia",
    images: [
      {
        url: "https://swiftmedia.cc/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SwiftMedia - Secure Media Processing Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftMedia - 100% Secure & Private Media Tools",
    description: "Fast, secure, and 100% client-side PDF and media tools. Process your files locally without uploads.",
    images: ["https://swiftmedia.cc/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://swiftmedia.cc",
    languages: {
      "en-US": "https://swiftmedia.cc",
      "en-GB": "https://swiftmedia.cc/en-GB",
      "en-CA": "https://swiftmedia.cc/en-CA",
      "en-AU": "https://swiftmedia.cc/en-AU",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData 
          type="Organization" 
          data={{
            foundingDate: "2024",
            address: {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            url: "https://swiftmedia.cc",
            sameAs: [
              "https://twitter.com/swiftmedia",
              "https://facebook.com/swiftmedia",
              "https://linkedin.com/company/swiftmedia"
            ]
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased transition-colors duration-300`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
