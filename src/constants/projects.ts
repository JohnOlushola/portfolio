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
    title: "Algorithmic Bias Mitigation",
    date: "2022",
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
    title: "Climate Change: Adaptation with Directed Chaos",
    date: "2022",
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
    date: "2022",
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
    title: "TJWHO Storefront",
    date: "2022 - 2023",
    src: "/videos/tjwho-short.mp4#t=0.01",
    media: "video",
    link: {
      url: "https://www.tjwho.co",
      external: true,
    },
  },
  {
    src: "https://cdn.rauno.me/mercury.mp4#t=0.01",
    media: "video",
  },
];

const columns = 4;
const rows = Math.ceil((projects.length + 1) / columns);

export { projects, columns, rows };
