import "../styles/globals.css";

import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { VercelToolbar } from "@vercel/toolbar/next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

// Font files can be colocated inside of `pages`
const customFont = localFont({
  src: "../../public/fonts/ClashGrotesk-Variable.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={customFont.className}>
      <Nav />
      <div className="ml-16 mr-5">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <VercelToolbar />
        <Footer />
      </div>
    </div>
  );
}
