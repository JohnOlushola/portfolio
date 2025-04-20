import "../styles/globals.css";

import React from "react";
import { Analytics } from "@vercel/analytics/react";
import PageHead from "@/components/PageHead";
import Header from "@/components/Header";

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
      </body>
    </html>
  );
}
