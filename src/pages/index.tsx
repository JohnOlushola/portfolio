import PageHead from "@/components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead />

      <div className="min-h-screen md:grid grid-cols-8 gap-3 md:gap-6 lg:gap-10 w-full h-full py-5 tracking-wide">
        <div className="col-span-5">
          <h2 className="mb-1 text-xl text-white">Hi, I am Temiloluwa.</h2>
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
              <h2 className="text-lg text-white">Projects &#8212;</h2>
              <p className=" tracking-wide text-sm">
                I'm always tinkering, here are some that made it out.
              </p>

              <ul className="my-5 list-disc list-inside space-y-4">
                <li className="h-full">
                  A Shopify storefront for{" "}
                  {/* Display preview video on hover */}
                  <a href="https://www.tjwho.co/" target="_blank">
                    tjwho.co.
                  </a>{" "}
                  Featured on <a href="https://read.cv/explore">read.cv</a>
                </li>
                <li className="h-full ">
                  I attempted recreating the{" "}
                  <a href="https://airpods-pro.jtolushola.com/" target="_blank">
                    Apple's Airpods Pro.
                  </a>{" "}
                  landing page for fun.
                </li>
                <li className="h-full">
                  Participated in an{" "}
                  <a
                    href="https://github.com/JohnOlushola/political_spending_uk"
                    target="_blank"
                  >
                    AI Hackathon
                  </a>{" "}
                  with a team of 3 hosted by{" "}
                  <a
                    href="https://profiles.sussex.ac.uk/p116624-julie-weeds"
                    target="_blank"
                  >
                    Prof. Julie Weeds.
                  </a>{" "}
                  We built a tool to extract and classify data using{" "}
                  <a href="https://huggingface.co/facebook/bart-large-mnli">
                    facebook/bart-large-mnli.
                  </a>{" "}
                  Coming 2nd place.
                </li>
                <li className="h-full">
                  Took a stab using{" "}
                  <a
                    href="https://github.com/JohnOlushola/bias-mitigation"
                    target="_blank"
                  >
                    regularisation and reweighing with bi-objective measure
                  </a>{" "}
                  to reduce bias in a ML model. Read{" "}
                  <a href="/report/bias-mitigation" download="bias-mitigation">
                    report
                  </a>
                  .
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-white">Writing &#8212;</h2>
              <p className=" tracking-wide text-sm">
                Could be engineering related, philosophical or just ideas.
              </p>

              <ul className="my-5 list-disc list-inside space-y-4">
                <li className="h-full text-">
                  <a
                    href="https://medium.com/@jtolushola/debugging-is-an-art-530b0323f9e5"
                    target="_blank"
                  >
                    Debugging is an Art
                  </a>
                  &#8212; 4 min read
                </li>
                <li className="h-full text-">
                  <a
                    href="https://medium.com/@jtolushola/debugging-is-an-art-530b0323f9e5"
                    target="_blank"
                  >
                    New Year Resolutions? No
                  </a>
                  &#8212; 4 min read
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 w-full md:h-full flex items-start justify-start">
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
