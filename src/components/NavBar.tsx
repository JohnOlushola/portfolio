import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const navItems = [
  {
    name: "about",
    link: "/",
  },
  {
    name: "writing",
    link: "/",
  },
  {
    name: "projects",
    link: "/projects",
  },
] as const;

export default function NavBar() {
  const { pathname } = useRouter();

  const activeNavItem = navItems.find((item) => item.link.includes(pathname));

  return (
    <div className="flex justify-between border-black dark:border-white">
      <Link href="/" className="text-md md:text-xl">
        Olushola Temiloluwa
      </Link>
      <div />
      <ul className="md:flex justify-between gap-10">
        {navItems.map((item, index) => (
          <li key={`nav_item_${index}`}>
            <Link
              href={item.link}
              className={`text-md md:text-xl ${
                activeNavItem?.link === item.link ? "underline" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
