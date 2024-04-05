import PageHead from "@/components/PageHead";

const projects = [
  {
    content: (
      <>
        A Shopify storefront for{" "}
        <a href="https://www.tjwho.co/" target="_blank">
          tjwho.co.
        </a>{" "}
        Featured on <a href="https://read.cv/explore">read.cv</a>
      </>
    ),
  },
  {
    content: (
      <>
        I attempted recreating the{" "}
        <a href="https://airpods-pro.jtolushola.com/" target="_blank">
          Apple's Airpods Pro.
        </a>{" "}
        landing page for fun.
      </>
    ),
  },
  {
    content: (
      <>
        Took a stab at ML model{" "}
        <a
          href="https://github.com/JohnOlushola/bias-mitigation"
          target="_blank"
        >
          bias mitigation using regularisation and reweighing
        </a>{" "}
        with a bi-objective measure.
      </>
    ),
  },
  {
    content: (
      <>
        A climate system that can adapt to itself? Using Directed Chaos
        (Logistic Map).{" "}
        <a
          href="https://github.com/JohnOlushola/adaptive_climate_pathways/blob/master/climate_system.ipynb"
          target="_blank"
        >
          Read notebook
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
        &#8212; 4 min read
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
        &#8212; 4 min read
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <PageHead />

      <div className="min-h-screen md:grid grid-cols-8 gap-3 md:gap-6 lg:gap-10 w-full h-full py-5 tracking-wide">
        <div className="col-span-5">
          <h2 className="mb-1 text-xl dark:text-white">Hi, I am Temiloluwa.</h2>
          <div className="tracking-wide space-y-5 mb-10">
            <p>
              I’m a 24 y/o software engineer based in London, England. I'm a
              body-builder, music lover, and amateur iPhone photographer. I also
              love the sound of a V8 engine.
            </p>

            <p>
              My interests lie right at the intersection of design, engineering
              and AI. As a result I am passionate about creating and building
              things that are both functional and beautiful.
            </p>
          </div>

          <div className="md:grid grid-cols-2 gap-6 w-11/12">
            <div className="col-span-1">
              <h2 className="text-lg dark:text-white">Projects &#8212;</h2>
              <p className=" tracking-wide text-sm">
                I'm always tinkering, here are some that made it out.
              </p>

              {/* Display preview video/image on hover */}
              <ul className="my-5 list-disc list-inside space-y-3">
                {projects.map((project, index) => (
                  <li key={`project_${index}`}>{project.content}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg dark:text-white">Writing &#8212;</h2>
              <p className=" tracking-wide text-sm">
                Could be engineering related, philosophical or just ideas.
              </p>

              <ul className="my-5 list-disc list-inside space-y-3">
                {writing.map((write, index) => (
                  <li key={`writing_${index}`}>{write.content}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 w-full md:h-full flex items-center justify-center">
          <div>
            {/* Can change on click. Use the feature photographs, or projects */}
            <video
              src="/videos/tjwho.mp4"
              autoPlay
              playsInline
              loop
              muted
              className="h-auto w-full object-contain mb-2"
            />
            <p className="text-xs">TJWHO Storefront</p>
          </div>
        </div>
      </div>
    </>
  );
}
