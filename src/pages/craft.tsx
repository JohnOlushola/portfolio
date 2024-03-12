import { Grid } from "../components/Grid";
import { GridCell } from "../components/GridCell";
import VideoResource from "../components/VideoResource";
import PictureResource from "../components/PictureResource";
import TextResource from "../components/TextResource";
import { Resource } from "../types/resource";
import PageHead from "../components/PageHead";

const projects: Resource[] = [
  {
    title: "TJWHO Storefront",
    date: 2023,
    src: "/videos/tjwho.mp4",
    media: "video",
    link: {
      url: "https://www.tjwho.co",
      external: true,
    },
  },
  {
    title: "Animated Signature",
    date: 2022,
    link: {
      url: "https://codesandbox.io/p/sandbox/animated-signature-wpfc87?file=%2Findex.html%3A24%2C8",
      external: true,
    },
    description: "The beginning, enjoy!",
    src: "/videos/animated-signature.mp4",
    media: "video",
  },
  {
    title: "Animating images on scroll with Canvas",
    date: 2021,
    src: "/images/airpods-pro.png",
    media: "image",
    link: {
      url: "https://airpods-pro.jtolushola.com/",
      external: true,
    },
  },
  {
    title: "Built with HTML, CSS and 81.9 KB JS",
    date: 2020,
    link: {
      url: "https://github.com/JohnOlushola/bookstore",
      external: true,
    },
    description: "The beginning, enjoy!",
    src: "/images/bookstore.png",
    media: "image",
  },
];

export const Home = () => {
  return (
    <>
      <PageHead
        title="Craft"
        description="Interfaces, animations, and side projects."
        image="/images/avatar.jpeg"
      />
      <div className="flex flex-col">
        <Grid columns={4} rows={Math.ceil(projects.length / 4)}>
          {projects.map((resource, index) => (
            <GridCell key={index} row={"auto"} column={"auto"}>
              {resource.media === "video" ? (
                <VideoResource {...resource} />
              ) : resource.media === "image" ? (
                <PictureResource {...resource} alt={resource.alt || ""} />
              ) : resource.media === "text" ? (
                <TextResource
                  {...resource}
                  description={resource.description || ""}
                />
              ) : (
                <></>
              )}
            </GridCell>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Home;
