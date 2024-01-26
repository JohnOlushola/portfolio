import { ImageLoaderProps } from "next/image";
import { Resource } from "../types/resource";

const projects: Resource[] = [
  {
    type: "Prototype",
    title: "Animated Signature",
    date: "May 2023",
    link: {
      url: "/projects/animated-signature",
    },
    src: "https://cdn.rauno.me/graph-slider-2.mp4#t=0.01",
    media: "video",
  },
  {
    title: "New Year's Resolutions? No",
    date: "Mar 2, 2020",
    link: {
      url: "https://medium.com/@jtolushola/new-years-resolutions-no-d0de5e115371",
      external: true,
    },
    description:
      "I don't quite agree with the idea of New Year's Resolutions. It hardly ever works, not for me at least.",
    src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*USMLKZubYe-HbcxSdPNbtQ.jpeg",
    media: "image",
    imageLoader: ({ src }: ImageLoaderProps) => {
      return src;
    },
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

const columns = 4;
const rows = Math.ceil((projects.length + 1) / columns);

export { projects, columns, rows };
