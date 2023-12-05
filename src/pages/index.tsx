import Column from "../components/Column";
import Grid from "../components/Grid";
import Video from "../components/Video";
import Picture from "../components/Picture";

export default function Home() {
  return (
    <Grid>
      <Column>
        <Picture
          src="/images/og-nextjs.webp"
          alt="Test"
          title="Creating the Next.js Website"
          date="April 2023"
          type="Post"
          link={{
            url: "https://nextjs.org/blog/next-10",
          }}
        ></Picture>
        <Video
          src="https://cdn.rauno.me/ios-radial-menu.mp4#t=0.01"
          title="hello, world"
          date="December 2023"
        />
        <Video
          src="https://cdn.rauno.me/graph-slider-2.mp4#t=0.01"
          title="Graph Slider"
          date="May 2023"
          type="Prototype"
          link={{
            url: "https://rauno.me/craft/graph-slider",
          }}
        />
      </Column>
      <Column>
        <Video
          src="https://cdn.rauno.me/bezels2.mp4#t=0.01"
          title="SwiftUI Bezel Dock"
          date="December 2023"
        />
        <Video src="https://cdn.rauno.me/wheel-input-3.mp4#t=0.01" />
        <Video src="https://cdn.rauno.me/uig.mp4#t=0.01" />
      </Column>
      <Column>
        <Video src="https://cdn.rauno.me/seek.mp4#t=0.01" />
        <Video src="https://cdn.rauno.me/mercury.mp4#t=0.01" />
      </Column>
    </Grid>
  );
}
