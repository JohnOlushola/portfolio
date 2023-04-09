import Image from "next/image";
import { Inter } from "next/font/google";
import LandingImage from "../../public/images/landing-image.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex h-screen flex-col justify-between gap-y-2.5">
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
    </main>
  );
}
