"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavTabs() {
  const tabs = [
    { label: "works", url: "/" },
    { label: "crafts", url: "/crafts" },
    { label: "notes", url: "/notes" },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex space-x-10 sticky top-4 bg-background/40 px-10 pb-5 pt-3 backdrop-blur-md rounded-md">
      {tabs.map(({ label, url }) => (
        <Link
          href={url}
          key={label}
          className={cn({
            "decoration-accent text-accent focus:outline-accent":
              pathname === url || pathname.startsWith(`${url}/`),
          })}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
