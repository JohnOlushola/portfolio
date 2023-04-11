import Image from "next/image";
import Link from "next/link";
import LandingImage from "../../public/images/landing-image.png";
import PageHead from "../components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead title="JTOLUSHOLA" description="John Temiloluwa Olushola" />

      <div className="landing-container">
        <div className="relative group">
          <Image
            src={LandingImage}
            className="object-cover h-[200px]"
            alt="The Cavemen at the SDC Show in Clapham Junction"
          />
          <div className="caption invisible group-hover:visible">
            <p className="text-xs">
              The Cavemen at the SDC Show &nbsp;&mdash;&nbsp; Oct 9, 2022
            </p>
          </div>
        </div>

        <div className="flex justify-between border-y border-black py-2.5">
          <h2 className="text-xl md:text-4xl">engineering</h2>
          <Link href="/me">
            <h2 className="text-xl md:text-4xl">me</h2>
          </Link>
          <h2 className="text-xl md:text-4xl">photography</h2>
        </div>

        <h1 className="text-6xl sm:text-[100px] md:text-[140px] xl:text-[220px] text-justify uppercase border-y border-black tracking-wide">
          JTOLUSHOLA
        </h1>
      </div>
    </>
  );
}
