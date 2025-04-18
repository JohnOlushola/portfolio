import { ContentItem } from "@/pages";
import React from "react";

export default function WorkItem({ link, asset, name }: ContentItem) {
  return (
    <article>
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
          className="w-full lg:w-[70vw] h-full mb-1 rounded-xl overflow-hidden peer border-2 hover:border-accent hover:p-1 transition-all"
          src={asset}
        />
        <div className="flex justify-between">
          <span className="text-left">{name}</span>
        </div>
      </a>
    </article>
  );
}
