import Link from "next/link";
import User from "./ui/User";

export function Header() {
  return (
    <header className="">
      <nav className="flex justify-between items-center border-b py-3 mb-10 lg:mb-12">
        <User
          url="/"
          fallback="JT"
          username="jtolushola"
          image="/images/avatar.jpeg"
        />

        <div className="inline-flex gap-6 md:gap-10">
          <Link href="/posts">posts</Link>
          <Link href="/resources">resources</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
