import ResourceContainer from "./ResourceContainer";
import Caption from "./Caption";
import { Resource } from "../types/resource";

interface VideoResourceProps extends Resource {}

export default function VideoResource({
  src,
  title,
  date,
  link,
  type,
}: VideoResourceProps) {
  return (
    <ResourceContainer link={link} type={type}>
      <div className="resource">
        <video
          src={src}
          autoPlay
          playsInline
          loop
          muted
          className="h-full w-full object-center object-cover"
        />
        <Caption title={title} date={date} />
      </div>
    </ResourceContainer>
  );
}
