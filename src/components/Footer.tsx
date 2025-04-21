import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container flex flex-col space-y-4 items-center py-8 text-sm">
        <div className="flex items-center gap-8">
          <Link href="/resources">resources</Link>
          <a
            href="https://github.com/JohnOlushola"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </a>
          <a
            href="mailto:johntemiloluwa.o@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            say hi
          </a>
        </div>

        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Olushola Temiloluwa.
        </p>
      </div>
    </footer>
  );
}
