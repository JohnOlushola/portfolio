import Link from "next/link";
import { formatDate, getBlogPosts } from "./utils";
import PreviewedLink from "@/components/PreviewedLink";

export default function Notes() {
  let notes = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <ol className="space-y-8 md:space-y-4 mx-auto w-full lg:w-[80vw] ml-8 md:ml-0 list-decimal">
      {notes.map(({ slug, metadata }) => {
        const LinkComp = metadata.image ? PreviewedLink : Link;

        return (
          <li key={slug}>
            <LinkComp
              asset={metadata.image ?? ""}
              href={`/notes/${slug}`}
              className="flex flex-col space-y-1"
            >
              <div className="w-full flex flex-col space-y-2 justify-between md:flex-row md:items-baseline md:space-x-10">
                <p className="tracking-tight !text-foreground">{metadata.title}</p>
                <p className="tabular-nums text-muted-foreground">
                  {formatDate(metadata.publishedAt, false)}
                </p>
              </div>
            </LinkComp>
          </li>
        );
      })}
    </ol>
  );
}
