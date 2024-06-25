export default function Footer() {
  return (
    <footer className="mt-auto border-t flex justify-between items-center py-4">
      <p className="text-sm">&copy; 2024 Olushola Temiloluwa.</p>

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
    </footer>
  );
}
