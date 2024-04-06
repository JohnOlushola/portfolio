export default function Footer() {
  return (
    <footer className="mt-10 lg:mt-12 border-t svg-banner">
      <div>
        <svg
          viewBox="0 0 100 18"
          xmlns="http://www.w3.org/2000/svg"
          className="banner-svg"
        >
          <text x="2" y="14">
            JTOLUSHOLA
          </text>
        </svg>
      </div>

      <div className="border-t mt-4">
        <div className="flex justify-between items-center py-4">
          <p className="text-sm">&copy; 2024 Olushola Temiloluwa.</p>

          <div className="flex items-center gap-10">
            <a
              href="https://github.com/JohnOlushola"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              more code
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
      </div>
    </footer>
  );
}
