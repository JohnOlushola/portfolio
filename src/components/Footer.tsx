export default function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div>
        <svg
          viewBox="0 0 100 18"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:fill-white"
        >
          <text x="2" y="14">
            JTOLUSHOLA
          </text>
        </svg>
      </div>

      <hr className="my-1" />

      <div className="py-2.5">
        <ul className="inline-flex gap-4 w-full justify-center items-center align-middle">
          <li>
            <a
              href="https://github.com/JohnOlushola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-opacity-60"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:johntemiloluwa.o@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-opacity-60"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jtolushola/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-opacity-60"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
