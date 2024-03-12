import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const { pathname } = useRouter();

  const page = pathname === "/" ? "Holla" : "Craft";

  return (
    <header>
      <nav className="flex justify-between items-center border-b py-2.5">
        <Link href="/" className="text-opacity-60 italic">
          {page} &#8212;
        </Link>
      </nav>
    </header>
  );
}

export default Header;
