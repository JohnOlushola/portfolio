import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IBM_Plex_Mono } from "next/font/google";
import { Metadata } from "next";
import PageHead from "@/components/PageHead";
import React from "react";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Olushola Temiloluwa",
    description: "design, engineering & AI",
    applicationName: "Olushola Temiloluwa",
    openGraph: {
      title: "Olushola Temiloluwa",
      description: "design, engineering & AI",
      type: "website",
      url: "https://jtolushola.com",
      siteName: "Olushola Temiloluwa",
      images: [
        {
          url: "/images/wissahickon-cropped.jpg",
          alt: "Stream at Wissahickon, PA.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Olushola Temiloluwa",
      description: "design, engineering & AI",
      images: [
        {
          url: "/images/wissahickon-cropped.jpg",
          alt: "Stream at Wissahickon, PA.",
        },
      ],
    },
  };
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html className={mono.variable}>
      <body>
        <PageHead />
        <Analytics />
        <Header />
        <main className="my-20 container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
