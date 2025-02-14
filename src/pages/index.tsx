import PageHead from "@/components/PageHead";
import PreviewedLink from "@/components/PreviewedLink";
import Link from "next/link";

interface ContentItem {
  name: string;
  link: string;
  asset?: string;
}

const projects: ContentItem[] = [
  {
    name: "Solar Asset Mapper",
    link: "https://solar.transitionzero.org/",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/high_obnhlw",
  },
  {
    name: "TJWHO Universe",
    link: "https://www.tjwho.co/",
    asset: "/videos/tjwho-main.mp4",
  },
  {
    name: "Airpods Pro",
    link: "https://airpods-pro.jtolushola.com/",
    asset: "/videos/airpods.mov",
  },
];

const notes: ContentItem[] = [
  {
    name: "State machines - a simple introduction",
    link: "/notes/state-machines",
  },
  {
    name: "On keeping things simple",
    link: "/notes/on-keeping-things-simple",
  },
  {
    name: "...more",
    link: "/notes",
  },
];

export default function Home() {
  return (
    <div className="text-xl lg:text-2xl tracking-wide lg:tracking-wide leading-normal lg:leading-normal font-medium">
      <PageHead />

      <div className="mb-20 max-w-5xl lg:max-w-full flex flex-col gap-8">
        <div>
          <h1 className="tracking-wide">Temiloluwa Olushola</h1>
          <p className="opacity-60">Software Engineer</p>
        </div>

        <p>
          I&apos;m a software engineer interested in the intersection of design,
          engineering and AI. Now leading design at{" "}
          <a href="https://www.transitionzero.org/" target="_blank">
            TransitionZero
          </a>
          , I&apos;m crafting interfaces that simplifies the world of complex{" "}
          <PreviewedLink
            href="https://builder.transitionzero.org/"
            asset="https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/wg9yezedcgq7uchpkwqx"
            target="_blank"
          >
            energy systems modelling
          </PreviewedLink>
        </p>

        <p>On the side, I love cars, weight-lifting and photography.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-12 w-full xl:w-3/4 h-full">
        <div className="col-span-1">
          <h2>Projects &#8212;</h2>
          <ul className="my-2.5 space-y-1">
            {projects.map((project, index) => (
              <li key={`project_${index}`}>
                <PreviewedLink
                  asset={project.asset!}
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                </PreviewedLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Notes &#8212;</h2>
          <ul className="my-2.5 space-y-1">
            {notes.map((note, index) => (
              <li key={`note_${index}`}>
                <Link href={note.link}>{note.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
