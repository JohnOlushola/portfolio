import "nextra-theme-blog/style.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { VercelToolbar } from "@vercel/toolbar/next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

// Font files can be colocated inside of `pages`
const customFont = localFont({
  src: "../../public/fonts/ClashGrotesk-Variable.ttf",
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
      <div className={`${customFont.className} container flex flex-col min-h-screen`}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <VercelToolbar />
        <Footer />
      </div>
    </>
  );
}
