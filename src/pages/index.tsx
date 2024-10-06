import PageHead from "@/components/PageHead";

interface ContentItem {
  name: string;
  link: string;
}

const projects: ContentItem[] = [
  {
    name: "Solar Asset Mapper",
    link: "https://solar.transitionzero.org/",
  },
  {
    name: "TJWHO Universe",
    link: "https://www.tjwho.co/",
  },
  {
    name: "Airpods Pro",
    link: "https://airpods-pro.jtolushola.com/",
  },
];

const notes: ContentItem[] = [
  {
    name: "...a space to share resources",
    link: "/notes/resources",
  },
  {
    name: "On keeping things simple",
    link: "/notes/on-keeping-things-simple",
  },
  {
    name: "The compounding effect of learning",
    link: "/notes/compounding-effect-learning",
  },
];

export default function Home() {
  return (
    <div className="text-xl lg:text-2xl tracking-wide lg:tracking-wide leading-normal lg:leading-normal font-medium">
      <PageHead />

      <div className="mb-20 max-w-5xl lg:max-w-full flex flex-col gap-8">
        <div>
          <h1 className="tracking-wide">Temiloluwa Olushola</h1>
          <p className="opacity-60">Software Engineer in London</p>
        </div>

        <p>
          I&apos;m a software engineer interested in the intersection of design,
          engineering and AI. Now leading design at{" "}
          <a href="https://www.transitionzero.org/" target="_blank">
            TransitionZero
          </a>
          , I&apos;m crafting interfaces that simplifies the world of complex
          energy systems modelling. I&apos;m also tinkering at{" "}
          <a href="https://tnkr.ai/" target="_blank">
            tnkr.ai
          </a>{" "}
          with the crew.
        </p>

        <p>On the side, I love cars, weight-lifting and photography.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-12 w-full xl:w-3/4 h-full">
        <div className="col-span-1">
          <h2>Projects &#8212;</h2>
          <ul className="my-2.5 space-y-1">
            {projects.map((project, index) => (
              <li key={`project_${index}`}>
                <a href={project.link} target="_blank">
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Notes &#8212;</h2>
          <ul className="my-2.5 space-y-1">
            {notes.map((notes, index) => (
              <li key={`project_${index}`}>
                <a href={notes.link} target="_blank">
                  {notes.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
