import Link from "next/link";
import CommentButton from "./CommentButton";

export function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center border-b py-2.5">
        <Link href="/" className="text-opacity-60">
          Olushola Temiloluwa
        </Link>
      </nav>
    </header>
  );
}

export default Header;
