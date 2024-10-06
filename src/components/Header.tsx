import Link from "next/link";
import Avatar from "./ui/Avatar";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="container flex justify-between items-center pt-8">
        <Link href="/" className="opacity-100">
          <Avatar url="/images/avatar.jpeg" fallback="JT" className="w-7 h-7" />
        </Link>
        <div className="inline-flex gap-6 md:gap-10">
          <Link href="/resources">resources</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
