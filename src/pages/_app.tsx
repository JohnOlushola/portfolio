import "../styles/globals.css";

import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { VercelToolbar } from "@vercel/toolbar/next";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Font files can be colocated inside of `pages`
const customFont = localFont({
  src: "../../public/fonts/ClashGrotesk-Variable.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`flex flex-col h-full min-h-screen ${customFont.className}`}
    >
      <Header />
      <Component {...pageProps} />
      <VercelToolbar />
      <Footer />
    </div>
  );
}
