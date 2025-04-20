import Link from "next/link";
import { formatDate, getBlogPosts } from "./utils";

export default function Notes() {
  let notes = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <ol className="space-y-4 mx-auto w-full lg:w-[80vw] list-decimal">
      {notes.map(({ slug, metadata }) => (
        <li key={slug}>
          <Link href={`/notes/${slug}`} className="flex flex-col space-y-1">
            <div className="w-full flex flex-col justify-between md:flex-row md:items-baseline md:space-x-10">
              <p className="tracking-tight">{metadata.title}</p>
              <p className="tabular-nums text-muted-foreground">
                {formatDate(metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
