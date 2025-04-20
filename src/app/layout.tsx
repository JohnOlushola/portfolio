import Header from "@/components/Header";
import "../styles/globals.css";

import React from "react";
import { Analytics } from "@vercel/analytics/react";
import PageHead from "@/components/PageHead";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <html>
      <body className="relative container">
        <PageHead />
        <Analytics />
        <Header />
        {children}
      </body>
    </html>
  );
}
