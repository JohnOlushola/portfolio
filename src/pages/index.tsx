import NavTabs from "@/components/NavTabs";
import PageHead from "@/components/PageHead";
import PreviewedLink from "@/components/PreviewedLink";
import WorkItem from "@/components/WorkItem";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export interface ContentItem {
  id: string;
  name: string;
  link: string;
  asset?: string;
  year?: number;
}

const projects: ContentItem[] = [
  {
    id: "scenario-builder",
    name: "Scenario Builder",
    link: "https://solar.transitionzero.org/",
    asset: "/videos/scenario-builder.mp4",
    year: 2025,
  },
  {
    id: "sam",
    name: "Solar Asset Mapper",
    link: "https://solar.transitionzero.org/",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/high_obnhlw",
    year: 2024,
  },
  {
    id: "tjwho",
    name: "TJWHO Universe",
    link: "https://www.tjwho.co/",
    asset: "/videos/tjwho-main.mp4",
    year: 2023,
  },
  {
    id: "airpods-pro",
    name: "Airpods Pro",
    link: "https://airpods-pro.jtolushola.com/",
    asset: "/videos/airpods.mov",
    year: 2020,
  },
];

const notes: ContentItem[] = [
  {
    id: "typing-a-slug",
    name: "Typing a slug",
    link: "/notes/typing-a-slug",
  },
  {
    id: "state-machines-a-simple-introduction",
    name: "State machines - a simple introduction",
    link: "/notes/state-machines",
  },
  {
    id: "on-keeping-things-simple",
    name: "On Keeping things simple",
    link: "/notes/state-machines",
  },
  {
    id: "a-space-to-share-resources",
    name: "A space to share resources",
    link: "/notes/state-machines",
  },
  {
    id: "more",
    name: "...more",
    link: "/notes",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("works");

  const { pathname } = useRouter();

  return (
    <>
      <PageHead />
      <div className="font-mono text-center mt-20 justify-center flex flex-col items-center scroll-smooth">
        <details className="group mt-6 text-center max-w-prose mx-auto mb-8">
          <summary className="cursor-pointer hover:underline underline-offset-8 decoration-dashed decoration-muted-foreground ease-in-out">
            Temiloluwa Olushola &mdash;{" "}
            <span className="text-muted-foreground">
              design, engineering and; more
            </span>
          </summary>

          <div className="mt-6 leading-relaxed space-y-6">
            <p>
              I’m currently a Senior Frontend Engineer at{" "}
              <PreviewedLink
                href="https://www.transitionzero.org"
                asset="/images/TransitionZero.jpeg"
              >
                TransitionZero
              </PreviewedLink>
              , where I’m helping build a platform for energy systems modelling.
              I also contributed to the development of{" "}
              <PreviewedLink
                href="https://solar.transitionzero.org/"
                asset="https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/high_obnhlw"
              >
                Solar Asset Mapper
              </PreviewedLink>{" "}
              , a planetary-scale dataset of medium to large-scale solar power
              plants.
            </p>
            <p>
              Outside of my work-related passions, I’m a gym rat, music lover,
              car enthusiast,{" "}
              <PreviewedLink
                href="https://chatgpt.com/share/6803c721-e940-8003-a55c-a4c482dbb6e1"
                asset="/images/wissahickon.jpg"
              >
                outdoorsy
              </PreviewedLink>{" "}
              type—and most importantly, a{" "}
              <PreviewedLink
                className="inline-block"
                href="https://chatgpt.com/share/6803c721-e940-8003-a55c-a4c482dbb6e1"
                asset="/images/TransitionZero.jpeg"
              >
                child of God
              </PreviewedLink>
              . Lately, I’ve been learning to dance Bachata and it’s been a
              blast. This site is my little home on the internet.
            </p>
            <p>
              In <Link href="/notes">/notes</Link>, you’ll find half-baked
              thoughts, learning snippets, technical writing, and anything else
              I feel like dropping here. Check out{" "}
              <Link href="/resources">/resources</Link> for a curated list of
              cool stuff—people, blogs, tools, ideas—that I’ve bookmarked. It’s
              mainly for me, but hopefully helpful for you too. In{" "}
              <Link href="/works">/works</Link> , you’ll find a few selected
              projects I’ve worked on. Thanks for stopping by, feel free to
              reach out. Cheers!
            </p>
          </div>
        </details>

        <NavTabs activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === "notes" ? (
          <ol className="mt-20 space-y-2.5 list-decimal">
            {notes.map(({ name, link }, index) => (
              <li key={index}>
                <Link href={link} className="flex">
                  {name}
                </Link>
              </li>
            ))}
          </ol>
        ) : activeTab === "works" ? (
          projects.map((project, index) => (
            <WorkItem key={index} {...project} />
          ))
        ) : (
          <iframe
            className="border-0 h-screen w-screen rounded-none mt-20"
            src="https://raindrop.io/jtolushola/all-44362671/embed/sort=-created"
          />
        )}

        <ul className="fixed inset-y-0 right-0 flex flex-col justify-center h-screen p-4 space-y-4 group">
          {projects.map(({ id }, index) => (
            <ol key={id}>
              <Link
                href={`/#${id}`}
                className={cn(
                  {
                    "decoration-accent text-accent text-xs": pathname.includes(
                      `/#${id}`
                    ),
                  },
                  "opacity-40 group-hover:opacity-100 transition-opacity ease-in-out"
                )}
              >
                {index}
              </Link>
            </ol>
          ))}
        </ul>
      </div>
    </>
  );
}
