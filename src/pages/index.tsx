import Image from "next/image";
import LandingImage from "../../public/images/landing-image.png";
import PageHead from "../components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead title="JTOLUSHOLA" description="John Temiloluwa Olushola" />

      <div className="flex h-screen flex-col justify-between gap-y-2.5">
        <div>
          <p className="text-xl border-y border-black w-fit">JTO</p>
        </div>

        <Image
          src={LandingImage}
          className="object-cover h-[200px]"
          alt="The cavemen at the SDC Show in Clapham Junction"
        />

        <div className="flex justify-between border-y border-black py-2.5">
          <h2 className="text-4xl">engineering</h2>
          <h2 className="text-4xl">photography</h2>
          <h2 className="text-4xl">me</h2>
        </div>

        <h1 className="text-[220px] uppercase border-y border-black">
          JTOLUSHOLA
        </h1>
      </div>
    </>
  );
}
