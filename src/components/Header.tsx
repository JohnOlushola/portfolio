import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center border-b py-2.5">
        <Link href="/" className="text-opacity-60">
          Olushola Temiloluwa
        </Link>

        <ul className="flex gap-4">
          <li>
            <Link href="/about" className="text-opacity-60">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
