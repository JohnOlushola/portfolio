import PageHead from "../components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead title="JTOLUSHOLA" description="John Temiloluwa Olushola" />

      <div className="landing-container dark:text-white dark:border-white">
        <div className="flex justify-between border-y border-black dark:border-white py-2.5">
          <h2 className="text-xl md:text-4xl">engineering</h2>
          <h2 className="text-xl md:text-4xl">me</h2>
          <h2 className="text-xl md:text-4xl">photography</h2>
        </div>

        <div className="h-auto mt-auto border-y border-black dark:border-white text-justify">
          <svg
            viewBox="0 0 100 18"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white"
          >
            <text x="2" y="14">
              JTOLUSHOLA
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}
