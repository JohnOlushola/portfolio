import { Grid } from "../components/Grid";
import { GridCell } from "../components/GridCell";
import VideoResource from "../components/VideoResource";
import PictureResource from "../components/PictureResource";
import TextResource from "../components/TextResource";
import Head from "next/head";
import { Resource } from "../types/resource";

const projects: Resource[] = [
  {
    title: "Hi, I am Temi",
    link: {
      url: "/about",
      external: false,
    },
    description: (
      <p className="opacity-60">
        My interests lie right at the intersection of design and engineering. As
        a result I am passionate about creating and building things that are
        both functional and beautiful.
      </p>
    ),
    src: "",
    media: "text",
  },
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
    title: "Canvas Drawing - Apple Airpods Pro",
    date: 2021,
    src: "/images/airpods-pro.png",
    media: "image",
    link: {
      url: "https://airpods-pro.jtolushola.com/",
      external: true,
    },
  },
  {
    title: "Bookstore",
    date: 2020,
    link: {
      url: "https://johnolushola.github.io/bookstore/",
      external: true,
    },
    description: "The beginning, enjoy!",
    src: "/images/bookstore.png",
    media: "image",
  },
] as const;

export const Home = () => {
  return (
    <>
      <Head>
        <title>Olushola Temiloluwa</title>
        <meta name="description" content="Olushola Temiloluwa's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <Grid columns={3} rows={Math.ceil(projects.length / 3)}>
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
