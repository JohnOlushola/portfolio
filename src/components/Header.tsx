import PreviewedLink from "./PreviewedLink";
import NavTabs from "./NavTabs";

export function Header() {
  return (
    <div className="mt-40 font-mono justify-center flex flex-col items-center container">
      <details className="group text-center max-w-prose mx-auto mb-8">
        <summary className="cursor-pointer hover:underline group-open:underline underline-offset-8 decoration-dashed decoration-muted-foreground ease-in-out outline-offset-4 focus-visible:outline-accent">
          Temiloluwa Olushola &mdash;{" "}
          <span className="text-muted-foreground">
            design, engineering and; more
          </span>
        </summary>

        <div className="mt-12 lg:mt-8 lg:leading-relaxed md:text-center text-pretty space-y-10 lg:space-y-6">
          <p>
            I’m currently a Senior Frontend Engineer at{" "}
            <PreviewedLink
              href="https://www.transitionzero.org"
              asset="/images/TransitionZero.jpeg"
            >
              TransitionZero
            </PreviewedLink>
            , and we are building out a no-code platform for{" "}
            <PreviewedLink
              href="https://builder.transitionzero.org/"
              asset="https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/Product_page_h6fonz"
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
            My interests and passions lie in the intersection of design,
            engineering and AI. As a result, I have a Master’s degree in AI,
            currently lead design at work and engineer solutions (one pixel at a
            time haha).
          </p>

          <p>
            Outside of my work-related passions, I’m a gym rat, music lover, car
            enthusiast,{" "}
            <PreviewedLink
              href="https://chatgpt.com/share/6803c721-e940-8003-a55c-a4c482dbb6e1"
              asset="/images/wissahickon.JPG"
            >
              outdoorsy
            </PreviewedLink>{" "}
            type and most importantly, a child of God. Lately, I’ve been
            learning to dance Bachata and it’s been a blast. This site is my
            little home on the internet.
          </p>
          <p>
            Thanks for stopping by, feel free to reach out to me on{" "}
            <a href="https://linkedin.com/in/jtolushola" target="_blank">
              LinkedIn
            </a>{" "}
            or{" "}
            <a href="mailto:johntemiloluwa.o@gmail.com" target="_blank">
              email
            </a>
            . Cheers!
          </p>
        </div>
      </details>
      <NavTabs />
    </div>
  );
}

export default Header;
