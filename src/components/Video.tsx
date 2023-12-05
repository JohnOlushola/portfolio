import ResourceContainer from "./ResourceContainer";
import Caption from "./Caption";
import { Resource } from "../types/resource";

interface VideoProps extends Resource {}

export default function Video({ src, title, date, link, type }: VideoProps) {
  const videoContent = (
    <div className="relative">
      <video src={src} autoPlay playsInline loop muted className="rounded-xl" />
      <Caption title={title} date={date} />
    </div>
  );

  return (
    <ResourceContainer link={link} type={type}>
      {videoContent}
    </ResourceContainer>
  );
}
