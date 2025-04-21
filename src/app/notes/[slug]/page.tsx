import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../utils";
import { baseUrl } from "@/sitemap";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkMdx from "remark-mdx";
import { unified } from "unified";
import rehypePrism from "rehype-prism-plus";
import "prismjs/themes/prism-tomorrow.css";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps) {
  // read route params
  const { slug } = await params;

  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/notes/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism)
    .use(remarkMdx)
    .use(rehypeStringify);

  const file = await processor.process(post.content);

  return (
    <section className="container">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/notes/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Olushola Temiloluwa",
            },
          }),
        }}
      />

      <div className="mx-auto text-accent mb-10 max-w-[65ch]">
        <h1 className="title text-2xl font-semibold tracking-tighter mb-0">
          {post.metadata.title}
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose dark:prose-invert mx-auto">
        <div dangerouslySetInnerHTML={{ __html: String(file) }} />
      </article>
    </section>
  );
}
