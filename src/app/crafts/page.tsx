import { ContentItem } from "../page";
import React from "react";

const crafts: ContentItem[] = [
  {
    id: "credence-ventures",
    name: "Credence Ventures",
    link: "https://www.credence-ventures.com/",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/v1773067910/portfolio/credence_low_adin9h.mp4",
    year: 2026,
  },
  {
    id: "ai-assisted-scenario-builder",
    name: "AI-Assisted Scenario Builder [Prototype]",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/ezfbqlkml7vm75x6nnvy",
    year: 2025,
  },
  {
    id: "airpods-pro",
    name: "Airpods Pro",
    link: "https://airpods-pro.jtolushola.com/",
    asset: "/videos/airpods.mov",
    year: 2020,
  },
  {
    id: "animated-svg",
    name: "Animated SVG",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/qvinaipgjkttcbpn4ksd",
    year: 2023,
  },
];

export default function CraftsPage() {
  return (
    <div className="justify-center flex flex-col items-center space-y-32">
      {crafts.map(({ id, link, asset, name, year }) => (
        <article id={id} key={id}>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group focus:outline-none"
            >
              <video
                muted
                loop
                autoPlay
                controls={false}
                playsInline
                className="w-full lg:w-[75vw] h-full mb-1 rounded-xl overflow-hidden border-2 group-focus:border-accent hover:border-accent group-focus:p-1 hover:p-1 transition-all"
                src={asset}
              />
              <div className="flex justify-between">
                <span>{name}</span>
                <span>{year}</span>
              </div>
            </a>
          ) : (
            <>
              <video
                muted
                loop
                autoPlay
                controls={false}
                playsInline
                className="w-full lg:w-[75vw] h-full mb-1 rounded-xl overflow-hidden border-2 hover:border-accent hover:p-1 transition-all"
                src={asset}
              />
              <div className="flex justify-between">
                <span>{name}</span>
                <span>{year}</span>
              </div>
            </>
          )}
        </article>
      ))}
    </div>
  );
}
