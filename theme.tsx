import Head from "next/head";
import type { NextraThemeLayoutProps } from "nextra";

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, frontMatter } = pageOpts;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>

      <main className="max-w-md mx-auto w-full my-10">{children}</main>
    </div>
  );
}
