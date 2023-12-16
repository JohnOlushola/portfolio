import Column from "../components/Column";
import Grid from "../components/Grid";
import Video from "../components/Video";
import Picture from "../components/Picture";
import { PictureResource, Resource } from "../types/resource";

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

export default function Home() {
  // Chunk the array into rows of 3
  const rows = Array.from(
    { length: Math.ceil(resources.length / 3) },
    (_, index) => resources.slice(index * 3, index * 3 + 3)
  );

  return (
    <Grid>
      {rows.map((row, rowIndex) => (
        <Column key={rowIndex}>
          {row.map((item, columnIndex) =>
            item.media === "video" ? (
              <Video key={columnIndex} {...item} />
            ) : (
              <Picture key={columnIndex} {...(item as PictureResource)} />
            )
          )}
        </Column>
      ))}
    </Grid>
  );
}
