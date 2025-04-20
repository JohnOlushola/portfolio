import Link from "next/link";
import PreviewedLink from "./PreviewedLink";
import NavTabs from "./NavTabs";

export function Header() {
  return (
    <div className="mt-40 font-mono text-center justify-center flex flex-col items-center container">
      <details className="group text-center max-w-prose mx-auto mb-8">
        <summary className="cursor-pointer hover:underline underline-offset-8 decoration-dashed decoration-muted-foreground ease-in-out outline-offset-4 focus-visible:outline-accent">
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
            , where I’m helping build a platform for{" "}
            <PreviewedLink
              href="https://builder.transitionzero.org/"
              asset="https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/dtqq3ixnpzfjftdf90tq"
            >
              energy systems modelling
            </PreviewedLink>
            . I also contributed to the development of{" "}
            <PreviewedLink
              href="https://solar.transitionzero.org/"
              asset="https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/high_obnhlw"
            >
              Solar Asset Mapper
            </PreviewedLink>
            , a planetary-scale dataset of medium to large-scale solar power
            plants.
          </p>
          <p>
            Outside of my work-related passions, I’m a gym rat, music lover, car
            enthusiast,{" "}
            <PreviewedLink
              href="https://chatgpt.com/share/6803c721-e940-8003-a55c-a4c482dbb6e1"
              asset="/images/wissahickon.jpg"
            >
              outdoorsy
            </PreviewedLink>{" "}
            type—and most importantly, a child of God. Lately, I’ve been
            learning to dance Bachata and it’s been a blast. This site is my
            little home on the internet.
          </p>
          <p>
            In <Link href="/notes">/notes</Link>, you’ll find half-baked
            thoughts, learning snippets, technical writing, and anything else I
            feel like dropping here. Check out{" "}
            <Link href="/resources">/resources</Link> for a curated list of cool
            stuff—people, blogs, tools, ideas that I’ve bookmarked. It’s mainly
            for me, but hopefully helpful for you too. In{" "}
            <Link href="/works">/works</Link> , you’ll find a few selected
            projects I’ve worked on. Thanks for stopping by, feel free to reach
            out. Cheers!
          </p>
        </div>
      </details>
      <NavTabs />
    </div>
  );
}

export default Header;
