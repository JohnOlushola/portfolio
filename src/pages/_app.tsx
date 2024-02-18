import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { VercelToolbar } from "@vercel/toolbar/next";

// Font files can be colocated inside of `pages`
const customFont = localFont({
  src: "../../public/fonts/ClashGrotesk-Variable.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={customFont.className}>
      <Component {...pageProps} />
      <VercelToolbar />
    </main>
  );
}
