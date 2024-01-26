import ResourceContainer from "./ResourceContainer";
import Caption from "./Caption";
import { Resource } from "../types/resource";

interface TestResourceProps extends Resource {
  description: string;
}

export default function VideoResource({
  src,
  title,
  date,
  link,
  type,
  description,
}: TestResourceProps) {
  return (
    <ResourceContainer link={link} type={type}>
      <div className="h-full flex flex-col justify-center items-center w-3/4 mx-auto">
        <p className="text-lg">{title}</p>
        <p className="opacity-60">{description}</p>
      </div>
      <Caption title={title} date={date} />
    </ResourceContainer>
  );
}
