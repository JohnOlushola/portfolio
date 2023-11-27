import PageHead from "../components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead title="JTOLUSHOLA" description="John Temiloluwa Olushola" />
      <div className="landing-container">
        <div className="h-auto mt-auto text-justify">
          <svg
            viewBox="0 0 100 13"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white"
          >
            <text x="1.5" y="12">
              JTOLUSHOLA
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}
