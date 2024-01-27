import { ImageLoaderProps } from "next/image";
import { Resource } from "../types/resource";

const projects: Resource[] = [
  {
    title: "New Year's Resolutions? No",
    date: 2020,
    link: {
      url: "https://medium.com/@jtolushola/new-years-resolutions-no-d0de5e115371",
      external: true,
    },
    description:
      "New year, new me? Nah ...",
    src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*USMLKZubYe-HbcxSdPNbtQ.jpeg",
    media: "text",
    imageLoader: ({ src }: ImageLoaderProps) => {
      return src;
    },
  },
  {
    title: "Algorithmic Bias Mitigation",
    date: 2022,
    link: {
      url: "https://github.com/JohnOlushola/bias-mitigation",
      external: true,
    },
    description:
      "Using regularisation and reweighing with bi-objective measure",
    src: "",
    media: "text",
  },
  {
    title: "TJWHO Storefront",
    date: 2023,
    src: "/videos/tjwho.mp4",
    media: "video",
    link: {
      url: "https://www.tjwho.co",
      external: true,
    },
  },
  {
    title: "Climate Change: Adaptation with Directed Chaos",
    date: 2022,
    link: {
      url: "https://github.com/JohnOlushola/adaptive_climate_pathways",
      external: true,
    },
    description:
      '"Controlled" logistic map to create climate pathways for adaptation',
    src: "",
    media: "text",
  },
  {
    title: "Spending Classifier",
    date: 2022,
    link: {
      url: "https://github.com/JohnOlushola/political_spending_uk",
      external: true,
    },
    // TODO: Review description
    description: "Applying machine learning to corruption analysis",
    src: "",
    media: "text",
  },
  {
    title: "Canvas Drawing - Apple Airpods Pro",
    date: 2021,
    src: "/images/airpods-pro.png",
    media: "image",
    link: {
      url: "https://airpods-pro.jtolushola.com/",
      external: true,
    },
  },
  {
    title: "Debugging is an Art",
    date: 2019,
    link: {
      url: "https://jtolushola.medium.com/debugging-is-an-art-530b0323f9e5",
      external: true,
    },
    description: "Opinionated take on debugging, written by my younger self",
    src: "",
    media: "text",
  },
  {
    title: "Starting Your Journey as a Developer",
    date: 2019,
    link: {
      url: "https://jtolushola.medium.com/debugging-is-an-art-530b0323f9e5",
      external: true,
    },
    description: "The beginning, enjoy!",
    src: "",
    media: "text",
  },
].sort((a, b) => b.date - a.date) as Resource[];

const columns = 4;
const rows = Math.ceil((projects.length + 1) / columns);

export { projects, columns, rows };
