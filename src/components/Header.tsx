import Link from "next/link";
import Avatar from "./ui/Avatar";

export function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center border-b py-3">
        <Avatar url="/images/avatar.jpeg" fallback="JT" className="w-6 h-6" />

        <div className="inline-flex gap-6 md:gap-10">
          <Link href="/resources">resources</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
