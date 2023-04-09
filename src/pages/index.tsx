import Image from "next/image";
import LandingImage from "../../public/images/landing-image.png";
import PageHead from "../components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead title="JTOLUSHOLA" description="John Temiloluwa Olushola" />

      <div className="landing-container">
        <div className="flex justify-between">
          <div className="group border-y border-black w-fit inline-flex items-center">
            <p className="text-xl group-hover:hidden">JTO</p>
            <p className="text-xl text-opacity-50 hidden group-hover:block">
              John Temiloluwa Olushola
            </p>
          </div>

          <p className="underline">work in progress!</p>
        </div>

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
          <h2 className="text-xl md:text-4xl">photography</h2>
          <h2 className="text-xl md:text-4xl">me</h2>
        </div>

        <h1 className="text-6xl sm:text-[100px] md:text-[140px] xl:text-[220px] text-justify uppercase border-y border-black tracking-wide">
          JTOLUSHOLA
        </h1>
      </div>
    </>
  );
}
