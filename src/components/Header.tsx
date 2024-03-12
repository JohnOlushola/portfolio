import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center border-b py-2.5">
        <Link href="/" className="text-opacity-60 italic">
          &#8212; Craft
        </Link>
      </nav>
    </header>
  );
}

export default Header;
