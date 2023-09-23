import PageHead from "../components/PageHead";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <PageHead title="JTOLUSHOLA" description="John Temiloluwa Olushola" />

      <div className="landing-container dark:text-white dark:border-white">
        <NavBar />

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
