import NavTabs from "@/components/NavTabs";
import PageHead from "@/components/PageHead";
import PreviewedLink from "@/components/PreviewedLink";
import WorkItem from "@/components/WorkItem";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export interface ContentItem {
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

        <NavTabs activeTab={activeTab} onChange={setActiveTab} />

        {projects.map(({ name, asset, link }, index) => (
          <WorkItem key={index} name={name} asset={asset} link={link} />
        ))}
      </div>
    </>
  );
}
