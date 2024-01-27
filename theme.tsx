import Head from "next/head";
import type { NextraThemeLayoutProps } from "nextra";

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, frontMatter } = pageOpts;

  return (
    <div className="flex flex-col h-full min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      <div>{children}</div>
      <div className="mt-auto">
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

        <ul className="inline-flex gap-x-2 w-full justify-center items-center align-middle border border-b">
          <li>
            <a
              href=" https://twitter.com/jtolushola"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:johntemiloluwa.o@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
