const projects = [
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
