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
      <div className="h-full w-full flex flex-col justify-center items-center p-4 md:p-6 lg:p-12">
        <p className="lg:text-lg w-full">{title}</p>
        <p className="opacity-60 w-full">{description}</p>
      </div>
      <Caption date={date} />
    </ResourceContainer>
  );
}
