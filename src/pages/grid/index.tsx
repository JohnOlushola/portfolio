import React from "react";
import { Grid } from "../../components/Grid";
import { GridCell } from "../../components/GridCell";
import VideoResource from "../../components/VideoResource";
import {
  PictureResource as PictureResourceType,
  Resource,
} from "../../types/resource";
import PictureResource from "../../components/PictureResource";

const resources: Resource[] = [
  {
    type: "Post",
    title: "Creating the Next.js Website",
    date: "April 2023",
    link: {
      url: "https://nextjs.org/blog/next-10",
    },
    src: "/images/og-nextjs.webp",
    media: "video",
    alt: "Test",
  },
  {
    type: "Prototype",
    title: "Graph Slider",
    date: "May 2023",
    link: {
      url: "https://rauno.me/craft/graph-slider",
    },
    src: "https://cdn.rauno.me/graph-slider-2.mp4#t=0.01",
    media: "video",
  },
  {
    type: "Post",
    title: "hello, world",
    date: "December 2023",
    src: "https://cdn.rauno.me/ios-radial-menu.mp4#t=0.01",
    media: "video",
  },
  {
    title: "SwiftUI Bezel Dock",
    date: "December 2023",
    src: "https://cdn.rauno.me/bezels2.mp4#t=0.01",
    media: "video",
  },
  {
    src: "https://cdn.rauno.me/wheel-input-3.mp4#t=0.01",
    media: "video",
  },
  {
    src: "https://cdn.rauno.me/uig.mp4#t=0.01",
    media: "video",
  },
  {
    src: "https://cdn.rauno.me/seek.mp4#t=0.01",
    media: "video",
  },
  {
    src: "https://cdn.rauno.me/mercury.mp4#t=0.01",
    media: "video",
  },
];

export default function GridPage() {
  const columns = 4;
  const rows = Math.ceil((resources.length + 1) / columns);

  return (
    <Grid rows={rows} columns={columns}>
      <GridCell row="auto" column={1}>
        <div className="container flex flex-col justify-between h-full">
          <div>
            <h1>Olushola Temiloluwa John</h1>
            <p className="opacity-60">Software Engineer</p>
          </div>
          <div>
            <p className="opacity-60">
              I work as a frontend engineer. I like to build things for
              designers and developers, and think deeply about the user
              interface, how it looks, feels, behaves. Also interested in
              Artificial Intelligence.
            </p>
          </div>
        </div>
      </GridCell>

      {resources.map((resource, index) => (
        <GridCell key={index} row={"auto"} column={"auto"}>
          {resource.media === "video" ? (
            <VideoResource {...resource} />
          ) : (
            <PictureResource {...(resource as PictureResourceType)} />
          )}
        </GridCell>
      ))}
    </Grid>
  );
}
