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
    <ol className="space-y-8 md:space-y-2 mx-auto w-full lg:w-[80vw] ml-4 lg:ml-auto list-decimal">
      {notes.map(({ slug, metadata }) => {
        return (
          <li key={slug}>
            <PreviewedLink
              internal
              asset={metadata.image}
              href={`/notes/${slug}`}
              className="flex flex-col space-y-1"
              target="_self"
            >
              <div className="w-full flex flex-col space-y-2 justify-between md:flex-row md:items-baseline md:space-x-10">
                <p className="tracking-tight !text-foreground">
                  {metadata.title}
                </p>
                <p className="tabular-nums text-muted-foreground">
                  {formatDate(metadata.publishedAt, false)}
                </p>
              </div>
            </PreviewedLink>
          </li>
        );
      })}
    </ol>
  );
}
