import PageHead from "@/components/PageHead";

export interface ContentItem {
  id: string;
  name: string;
  link: string;
  asset?: string;
  year?: number;
}

const projects: ContentItem[] = [
  {
    id: "scenario-builder",
    name: "Scenario Builder",
    link: "https://builder.transitionzero.org/",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/dtqq3ixnpzfjftdf90tq",
    year: 2025,
  },
  {
    id: "sam",
    name: "Solar Asset Mapper",
    link: "https://solar.transitionzero.org/",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/f_auto:video,q_auto/v1/portfolio/high_obnhlw",
    year: 2024,
  },
  {
    id: "tjwho",
    name: "TJWHO Universe",
    link: "https://www.tjwho.co/",
    asset: "/videos/tjwho-main.mp4",
    year: 2023,
  },
  {
    id: "airpods-pro",
    name: "Airpods Pro",
    link: "https://airpods-pro.jtolushola.com/",
    asset: "/videos/airpods.mov",
    year: 2020,
  },
];

export default function Home() {
  return (
    <div className="justify-center flex flex-col items-center space-y-32">
      {projects.map(({ id, link, asset, name, year }) => (
        <article id={id} key={id}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group focus:outline-none"
          >
            <video
              muted
              loop
              autoPlay
              controls={false}
              playsInline
              className="w-full lg:w-[75vw] h-full mb-1 rounded-xl overflow-hidden border-2 group-focus:border-accent hover:border-accent group-focus:p-1 hover:p-1 transition-all"
              src={asset}
            />
            <div className="flex justify-between">
              <span>{name}</span>
              <span>{year}</span>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}
