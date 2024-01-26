import Head from "next/head";
import type { NextraThemeLayoutProps } from "nextra";

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, frontMatter } = pageOpts;

  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      <div style={{ border: "1px solid" }}>{children}</div>
      <div className="h-auto mt-auto border-y text-justify">
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
    </main>
  );
}
