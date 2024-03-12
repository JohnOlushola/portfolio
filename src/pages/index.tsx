import PageHead from "@/components/PageHead";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageHead />

      <div className="flex flex-col w-full h-screen justify-center items-center align-middle">
        <div className="w-96">
          <h2 className="mb-1">Hi, I am Temiloluwa Olushola.</h2>
          <p className="opacity-60 mb-3">
            My interests lie right at the intersection of design and
            engineering. As a result I am passionate about creating and building
            things that are both functional and beautiful.
          </p>

          <ul className="list-disc">
            <li>
              <Link
                href="/craft"
                className="leading-6 text-opacity-60 hover:underline hover:text-opacity-100"
              >
                <span className="italic">Craft</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
