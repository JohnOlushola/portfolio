import "../styles/globals.css";

import React from "react";
import { Analytics } from "@vercel/analytics/react";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Olushola Temiloluwa",
    description: "design, engineering and; more",
    applicationName: "Olushola Temiloluwa",
    openGraph: {
      title: "Olushola Temiloluwa",
      description: "design, engineering and; more",
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
      description: "design, engineering and; more",
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

export default function layout({ children }: LayoutProps) {
  return (
    <html>
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
