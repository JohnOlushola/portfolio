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
      "Every new year, we find ourselves writing down a list of goals for the new year, our determination is usually a 100% and we picture of ourselves achieving those goals, we even share it with our friends and family but here’s the interesting part.",
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
      "Mitigating algorithmic bias using regularisation and reweighing with bi-objective (accuracy and fairness) measure",
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
      'Leveraging the widely recognized logistic map, the climate system is directed through growth, decay, stable, or chaotic regimes to generate unique pathways, hence the term "Directed Chaos."',
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
    description:
      "Built a classifier that takes invoices of political parties of the UK and classifies them into categories. The classifier is built using a CNN and trained on a dataset of 5,000+ invoices.",
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
    description:
      "Quite an opinionated piece on debugging, but might be worth a read. Written by my younger self.",
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
    description:
      "There’s always a beginning to a journey and this one is not different. So how about a first hand story of a great one?",
    src: "",
    media: "text",
  },
].sort((a, b) => b.date - a.date) as Resource[];

const columns = 4;
const rows = Math.ceil((projects.length + 1) / columns);

export { projects, columns, rows };
