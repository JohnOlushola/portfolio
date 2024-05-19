import PageHead from "@/components/PageHead";

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
        Canvas to draw a series of images to recreate the scroll interaction.{" "}
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
          href="https://medium.com/@jtolushola/debugging-is-an-art-530b0323f9e5"
          target="_blank"
        >
          New Year Resolutions? No
        </a>{" "}
        &#8212; 4 min read.
      </>
    ),
  },
  {
    content: (
      <>
        <a href="/posts/resources">Creating the resources page</a> &#8212; 2 min
        read.
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <PageHead />

      <div className="mb-10 lg:mb-20">
        <h2 className="max-w-sm mb-2.5 tracking-wide">
          Olushola Temiloluwa. Software Engineer, focusing on design,
          engineering & AI.
        </h2>
        <p className="max-w-3xl">
          My interests lie right at the intersection of design, engineering and
          AI. As a result I am passionate about crafting functional, intelligent
          and beautiful things. On the side, I create for fun.
        </p>
      </div>

      <div className="grid lg:grid-cols-8 gap-6 md:gap-6 w-full h-full">
        <div className="lg:col-span-6">
          <div className="md:grid grid-cols-2 gap-12">
            <div className="col-span-1">
              <h3>Projects &#8212;</h3>
              <p className="caption">
                I am always tinkering, here are some that made it out.
              </p>

              {/* Display preview video/image on hover */}
              <ul className="my-5 list-disc space-y-3">
                {projects.map((project, index) => (
                  <li key={`project_${index}`}>{project.content}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Writing &#8212;</h3>
              <p className=" caption">
                Could be engineering related, philosophical or just ideas.
              </p>

              <ul className="my-5 list-disc space-y-3">
                {writing.map((write, index) => (
                  <li key={`writing_${index}`}>{write.content}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 order-first lg:order-last w-full h-full flex items-center justify-center">
          <div>
            {/* Can change on click. Use the feature photographs, or projects */}
            <video
              src="/videos/tjwho.mp4"
              autoPlay
              playsInline
              loop
              muted
              className="h-auto w-full object-cover lg:object-contain mb-2"
            />
            <p className="text-xs">TJWHO Storefront</p>
          </div>
        </div>
      </div>
    </>
  );
}
