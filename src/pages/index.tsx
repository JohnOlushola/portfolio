import PageHead from "@/components/PageHead";
import Link from "next/link";

const writing = [
  {
    content: (
      <>
        <a
          href="https://medium.com/@jtolushola/debugging-is-an-art-530b0323f9e5"
          target="_blank"
        >
          Debugging is an Art
        </a>{" "}
        &#8212; 4 min read.
      </>
    ),
  },
  {
    content: (
      <>
        <a
          href="https://medium.com/@jtolushola/new-years-resolutions-no-d0de5e115371"
          target="_blank"
        >
          New Year Resolutions? No
        </a>{" "}
        &#8212; 4 min read.
      </>
    ),
  },
  {
    content: <Link href="/posts">All posts</Link>,
  },
];

interface Project {
  name: string;
  link: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "tjwho.co",
    link: "https://www.tjwho.co/",
    description:
      "A storefront for a Lagos based luxury fashion brand. Primary focus was on the create an experience the highlights the brand taste and luxury.",
  },
  {
    name: "Airpods Pro",
    link: "https://airpods-pro.jtolushola.com/",
    description:
      "I attempted recreating the Apple Airpods Pro landing page for fun. Using HTML Canvas to draw a series of images when scrolling.",
  },
  {
    name: "Mitigating bias",
    link: "https://github.com/JohnOlushola/bias-mitigation",
    description:
      "Mitigating bias while optimising for accuracy and precision in machine learning models. Inspired by the Learning Fair Representation paper was able to maintain both objectives while reducing bias.",
  },
  {
    name: "Adaptive Climate Systems",
    link: "https://github.com/JohnOlushola/adaptive_climate_pathways/blob/master/climate_system.ipynb",
    description:
      "A climate system that can adapt to itself? Using Directed Chaos (Logistic Map). Producing unrealistic pathways to stay below 1.5 °C.",
  },
];

export default function Home() {
  return (
    <>
      <PageHead />

      <div className="mb-10 lg:mb-32 max-w-3xl">
        <h1 className="mb-2.5 tracking-wide">
          Olushola Temiloluwa. Software Engineer, focusing on design,
          engineering & AI.
        </h1>
        <p>
          My interests lie right at the intersection of design, engineering and
          AI. As a result I am passionate about crafting functional, intelligent
          and beautiful things. On the side, I create for fun.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-12 w-full xl:w-3/4 h-full">
        <div className="col-span-1">
          <h2>Projects &#8212;</h2>
          <ul className="my-5 space-y-3">
            {projects.map((project, index) => (
              <li key={`project_${index}`}>
                <a href={project.link} target="_blank">
                  {project.name}
                </a>
                <p>{project.description} </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Writing &#8212;</h2>
          <ul className="my-5 list-disc space-y-3">
            {writing.map((write, index) => (
              <li key={`writing_${index}`}>{write.content}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
