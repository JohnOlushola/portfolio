export interface ContentItem {
  id: string;
  name: string;
  link?: string;
  asset?: string;
  year?: number;
}

const projects: readonly ContentItem[] = [
  {
    id: "credence-ventures",
    name: "Credence Ventures",
    link: "https://www.credence-ventures.com/",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/v1773067756/portfolio/credence_fkz44m.mp4",
    year: 2026,
  },
  {
    id: "scenario-builder-inputs-grid",
    name: "Scenario Builder Inputs",
    link: "http://transitionzero.org/products/scenario-builder",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/v1770228076/portfolio/inputs-overview_rekxan.mp4",
    year: 2026,
  },
  {
    id: "scenario-builder",
    name: "Scenario Builder",
    link: "http://transitionzero.org/products/scenario-builder",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/v1757309961/portfolio/Site_demo_130825_-_surface_xia01g.mp4",
    year: 2025,
  },
  {
    id: "sam",
    name: "Solar Asset Mapper",
    link: "https://solar.transitionzero.org/",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/v1757310937/portfolio/tz-sam-new_ufq5kl.mp4",
    year: 2024,
  },
  {
    id: "tjwho",
    name: "TJWHO Universe",
    link: "https://www.tjwho.co/",
    asset:
      "https://res.cloudinary.com/jtolushola/video/upload/v1757309611/portfolio/tjwho_o3wtzw.mp4",
    year: 2023,
  },
] as const;

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
