export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container flex justify-between items-center py-4 text-sm">
        <p className="">&copy; {new Date().getFullYear()} Olushola Temiloluwa.</p>

        <div className="flex items-center gap-10">
          <a
            href="https://github.com/JohnOlushola"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            code
          </a>
          <a
            href="mailto:johntemiloluwa.o@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            say hi
          </a>
        </div>
      </div>
    </footer>
  );
}
