import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { VercelToolbar } from "@vercel/toolbar/next";
import Link from "next/link";

// Font files can be colocated inside of `pages`
const customFont = localFont({
  src: "../../public/fonts/ClashGrotesk-Variable.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`flex flex-col h-full min-h-screen ${customFont.className}`}
    >
      <nav className="flex justify-between items-center border-b py-2">
        <Link href="/" className="text-opacity-60">
          Olushola Temiloluwa
        </Link>

        <ul className="flex gap-4">
          <li>
            <Link href="/about" className="text-opacity-60">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Component {...pageProps} />

      <VercelToolbar />

      <footer className="mt-auto border-t">
        <div>
          <svg
            viewBox="0 0 100 18"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white"
          >
            <text x="2" y="14">
              JTOLUSHOLA
            </text>
          </svg>
        </div>

        <hr className="my-1" />

        <div className="py-2">
          <ul className="inline-flex gap-4 w-full justify-center items-center align-middle">
            <li>
              <Link
                href="https://github.com/JohnOlushola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-opacity-60"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="mailto:johntemiloluwa.o@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-opacity-60"
              >
                Email
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
