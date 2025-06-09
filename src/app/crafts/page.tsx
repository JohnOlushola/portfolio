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
];

export default function page() {
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
                className="w-full lg:w-[75vw] h-full mb-1 rounded-xl overflow-hidden border-2 group-focus:border-accent hover:border-accent group-focus:p-1 hover:p-1 transition-all"
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
