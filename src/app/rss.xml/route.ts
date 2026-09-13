import { baseUrl } from "@/sitemap";
import { getBlogPosts } from "../notes/utils";

export const dynamic = "force-static";

const siteTitle = "Olushola Temiloluwa";
const siteDescription = "design, engineering & AI";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(date: string) {
  let normalised = date.includes("T") ? date : `${date}T00:00:00Z`;
  return new Date(normalised).toUTCString();
}

export async function GET() {
  let posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  let items = posts
    .map((post) => {
      let url = `${baseUrl}/notes/${post.slug}`;

      return `    <item>
      <title>${escapeXml(post.metadata.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toRfc822(post.metadata.publishedAt)}</pubDate>
      <description>${escapeXml(post.metadata.summary)}</description>
    </item>`;
    })
    .join("\n");

  let lastBuildDate = posts.length
    ? toRfc822(posts[0].metadata.publishedAt)
    : new Date().toUTCString();

  let feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${baseUrl}/notes</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
