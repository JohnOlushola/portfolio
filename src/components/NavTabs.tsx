import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface NavTabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function NavTabs({ activeTab, onChange }: NavTabsProps) {
  const tabs = [
    { label: "works", url: "/" },
    { label: "notes", url: "/notes" },
    { label: "resources", url: "/resources" },
  ];

  return (
    <nav className="flex space-x-10 sticky top-4 bg-background/40 px-10 pb-5 pt-3 backdrop-blur-md rounded-md">
      {tabs.map(({ label, url }) => (
        <Link
          href={url}
          key={label}
          className={cn({
            "decoration-accent text-accent focus:outline-accent":
              activeTab == label,
          })}
          onClick={() => onChange(label)}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
