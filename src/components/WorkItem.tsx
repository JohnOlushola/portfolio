import { ContentItem } from "@/pages";
import React from "react";

export default function WorkItem({ link, asset, name, id, year }: ContentItem) {
  return (
    <article id={id}>
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
          className="w-full lg:w-[70vw] h-full mb-1 rounded-xl overflow-hidden border-2 group-focus:border-accent hover:border-accent group-focus:p-1 hover:p-1 transition-all"
          src={asset}
        />
        <div className="flex justify-between">
          <span className="text-left">{name}</span>
        </div>
      </a>
    </article>
  );
}
