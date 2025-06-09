import React from "react";
import { ContentItem } from "../page";

const crafts: ContentItem[] = [
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

export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 max-w-7xl mx-auto">
      {crafts.map(({ id, link, asset, name, year }) => (
        <article
          id={id}
          key={id}
          className="flex flex-col justify-between h-full min-h-[400px]"
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group focus:outline-none flex-1"
            >
              <video
                muted
                loop
                autoPlay
                controls={false}
                playsInline
                className="w-full h-full mb-1 rounded-xl overflow-hidden border-2 group-focus:border-accent hover:border-accent group-focus:p-1 hover:p-1 transition-all"
                src={asset}
              />
              <div className="flex justify-between items-end mt-4 text-lg w-full">
                <span className="font-mono border-b-2 border-white/60 pb-1">
                  {name}
                </span>
                <span className="font-mono border-b-2 border-white/60 pb-1">
                  {year}
                </span>
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
                className="w-full h-full mb-1 rounded-xl overflow-hidden border-2 group-focus:border-accent hover:border-accent group-focus:p-1 hover:p-1 transition-all"
                src={asset}
              />
              <div className="flex justify-between items-end mt-4 text-lg w-full">
                <span className="font-mono border-b-2 border-white/60 pb-1">
                  {name}
                </span>
                <span className="font-mono border-b-2 border-white/60 pb-1">
                  {year}
                </span>
              </div>
            </>
          )}
        </article>
      ))}
    </div>
  );
}
