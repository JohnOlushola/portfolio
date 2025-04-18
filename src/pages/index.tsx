import PageHead from "@/components/PageHead";
import PreviewedLink from "@/components/PreviewedLink";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface ContentItem {
  name: string;
  link: string;
  asset?: string;
  year?: number;
}

const projects: ContentItem[] = [
  {
    name: "Scenario Builder",
    link: "https://solar.transitionzero.org/",
    asset: "/videos/scenario-builder.mp4",
    year: 2025,
  },
  {
    name: "Solar Asset Mapper",
    link: "https://solar.transitionzero.org/",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/high_obnhlw",
    year: 2024,
  },
  {
    name: "TJWHO Universe",
    link: "https://www.tjwho.co/",
    asset: "/videos/tjwho-main.mp4",
    year: 2023,
  },
  {
    name: "Airpods Pro",
    link: "https://airpods-pro.jtolushola.com/",
    asset: "/videos/airpods.mov",
    year: 2020,
  },
];

const notes: ContentItem[] = [
  {
    name: "Typing a slug",
    link: "/notes/typing-a-slug",
  },
  {
    name: "State machines - a simple introduction",
    link: "/notes/state-machines",
  },
  {
    name: "...more",
    link: "/notes",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("works");
  const tabs = ["works", "notes", "resources"];

  return (
    <>
      <PageHead />
      <div className="font-mono text-center mt-20 justify-center flex flex-col items-center relative">
        <h1 className="mb-8">
          Temiloluwa Olushola &mdash;{" "}
          <span className="opacity-60">design, engineering, AI;</span>{" "}
          <span>
            <Link href="/">more</Link>
          </span>
        </h1>

        <div className="flex mx-auto space-x-10 sticky top-4 bg-background/40 px-10 pb-5 pt-3 backdrop-blur-md rounded-md  shadow-lg">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={cn("tab cursor-pointer", {
                "decoration-accent text-accent": activeTab == tab,
              })}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {projects.map(({ name, asset, link, year }, index) => (
          <article key={index} className="space-y-4 mb-20">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <video
                muted
                loop
                autoPlay
                controls={false}
                className="w-full lg:w-[70vw] mb-1 rounded-xl overflow-hidden peer border-2 hover:border-accent hover:p-1 transition-all"
                src={asset}
              />
              <div className="flex justify-between">
                <span className="text-left">{name}</span>
                {/* <p className="opacity-60">{year}</p> */}
              </div>
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
