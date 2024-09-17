import "nextra-theme-blog/style.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { VercelToolbar } from "@vercel/toolbar/next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

// Font files can be colocated inside of `pages`
const customFont = localFont({
  src: [
    { path: "../../public/fonts/InterVariable.ttf", style: "normal" },
    { path: "../../public/fonts/InterVariable-Italic.ttf", style: "italic" },
  ],
});

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <div className={`${customFont.className} flex flex-col min-h-screen`}>
        <Analytics />
        <Header />
        <main className="my-20 container">
          <Component {...pageProps} />
        </main>
        <VercelToolbar />
        <Footer />
      </div>
    </>
  );
}
