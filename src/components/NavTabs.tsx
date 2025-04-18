import { cn } from "@/lib/utils";
import React from "react";

interface NavTabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function NavTabs({ activeTab, onChange }: NavTabsProps) {
  const tabs = ["works", "notes", "resources"];

  return (
    <div className="flex mx-auto space-x-10 sticky top-4 bg-background/40 px-10 pb-5 pt-3 backdrop-blur-md rounded-md  shadow-lg">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={cn("tab cursor-pointer", {
            "decoration-accent text-accent": activeTab == tab,
          })}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
