import { ImageLoaderProps } from "next/image";
import { Resource } from "../types/resource";

const projects: Resource[] = [
  // {
  //   title: "New Year's Resolutions? No",
  //   date: 2020,
  //   link: {
  //     url: "https://medium.com/@jtolushola/new-years-resolutions-no-d0de5e115371",
  //     external: true,
  //   },
  //   description: "New year, new me? Nah",
  //   src: "/images/logos.webp",
  //   media: "image",
  //   // imageLoader: ({ src }: ImageLoaderProps) => {
  //   //   return src;
  //   // },
  // },
  {
    title: "Algorithmic Bias Mitigation",
    date: 2022,
    link: {
      url: "https://github.com/JohnOlushola/bias-mitigation",
      external: true,
    },
    description:
      "Using regularisation and reweighing with bi-objective measure",
    src: "/images/optic.webp",
    media: "image",
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
  // {
  //   title: "Climate Change: Adaptation with Directed Chaos",
  //   date: 2022,
  //   link: {
  //     url: "https://github.com/JohnOlushola/adaptive_climate_pathways",
  //     external: true,
  //   },
  //   description:
  //     '"Controlled" logistic map to create climate pathways for adaptation',
  //   src: "",
  //   media: "text",
  // },
  // {
  //   title: "Spending Classifier",
  //   date: 2022,
  //   link: {
  //     url: "https://github.com/JohnOlushola/political_spending_uk",
  //     external: true,
  //   },
  //   // TODO: Review description
  //   description: "Applying machine learning to corruption analysis",
  //   src: "",
  //   media: "text",
  // },
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
  // {
  //   title: "Debugging is an Art",
  //   date: 2019,
  //   link: {
  //     url: "https://jtolushola.medium.com/debugging-is-an-art-530b0323f9e5",
  //     external: true,
  //   },
  //   description: "Opinionated take on debugging, written by my younger self",
  //   src: "/videos/laurent.mp4",
  //   media: "video",
  // },
  // {
  //   title: "Starting Your Journey as a Developer",
  //   date: 2019,
  //   link: {
  //     url: "https://jtolushola.medium.com/debugging-is-an-art-530b0323f9e5",
  //     external: true,
  //   },
  //   description: "The beginning, enjoy!",
  //   src: "/images/butterfly-1.webp",
  //   media: "image",
  // },
  {
    title: "Bookstore",
    date: 2020,
    link: {
      url: "https://johnolushola.github.io/bookstore/",
      external: true,
    },
    description: "The beginning, enjoy!",
    src: "/images/bookstore.png",
    media: "image",
  },
  {
    title: "Animated Signature",
    date: 2022,
    link: {
      url: "https://codesandbox.io/p/sandbox/animated-signature-wpfc87?file=%2Findex.html%3A24%2C8",
      external: true,
    },
    description: "The beginning, enjoy!",
    src: "/videos/animated-signature.mp4",
    media: "video",
  },
].sort((a, b) => b.date - a.date) as Resource[];

const columns = 4;
const rows = Math.ceil((projects.length + 1) / columns);

export { projects, columns, rows };
