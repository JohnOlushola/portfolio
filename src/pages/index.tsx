import PageHead from "@/components/PageHead";
import Link from "next/link";

const projects = [
  {
    content: (
      <>
        A storefront for a Lagos based luxury fashion brand{" "}
        <a href="https://www.tjwho.co/" target="_blank">
          tjwho.co.
        </a>{" "}
        Primary focus was on the create an experience the highlights the brand
        taste and luxury. Featured on{" "}
        <a href="https://read.cv/explore">read.cv</a>
      </>
    ),
  },
  {
    content: (
      <>
        I attempted recreating the Apple Airpods Pro landing page for fun. Using
        HTML Canvas to draw a series of images when scrolling.{" "}
        <a href="https://airpods-pro.jtolushola.com/" target="_blank">
          View Prototype.
        </a>{" "}
      </>
    ),
  },
  {
    content: (
      <>
        <a
          href="https://github.com/JohnOlushola/bias-mitigation"
          target="_blank"
        >
          Mitigating bias
        </a>{" "}
        while optimising for accuracy and precision in machine learning models.
        Inspired by the Learning Fair Representation{" "}
        <a
          href="https://proceedings.mlr.press/v28/zemel13"
          target="_blank"
          rel="noopener noreferrer"
        >
          paper
        </a>{" "}
        was able to maintain both objectives while reducing bias.
      </>
    ),
  },
  {
    content: (
      <>
        A climate system that can adapt to itself? Using Directed Chaos
        (Logistic Map). Producing unrealistic pathways to stay below 1.5 °C{" "}
        <a
          href="https://github.com/JohnOlushola/adaptive_climate_pathways/blob/master/climate_system.ipynb"
          target="_blank"
        >
          Explore notebook.
        </a>{" "}
      </>
    ),
  },
];

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

export default function Home() {
  return (
    <>
      <PageHead />

      <div className="mb-10 lg:mb-24 max-w-3xl">
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

      <div className="grid lg:grid-cols-2 gap-6 md:gap-12 w-full h-full">
        <div className="col-span-1">
          <h2>Projects &#8212;</h2>
          <ul className="my-5 list-disc space-y-3">
            {projects.map((project, index) => (
              <li key={`project_${index}`}>{project.content}</li>
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
