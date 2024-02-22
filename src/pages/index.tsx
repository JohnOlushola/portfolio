import { Grid } from "../components/Grid";
import { GridCell } from "../components/GridCell";
import VideoResource from "../components/VideoResource";
import PictureResource from "../components/PictureResource";
import TextResource from "../components/TextResource";
import { projects } from "../constants/projects";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Grid>
        {projects.map((resource, index) => (
          <GridCell key={index} row={"auto"} column={"auto"}>
            {resource.media === "video" ? (
              <VideoResource {...resource} />
            ) : resource.media === "image" ? (
              <PictureResource {...resource} alt="" />
            ) : resource.media === "text" ? (
              <TextResource {...resource} description="" />
            ) : (
              <div></div>
            )}
          </GridCell>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
