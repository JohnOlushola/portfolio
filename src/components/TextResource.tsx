import ResourceContainer from "./ResourceContainer";
import { Resource } from "../types/resource";

interface TestResourceProps extends Resource {
  description: string;
}

export default function TextResource({
  title,
  date,
  link,
  type,
  description,
}: TestResourceProps) {
  return (
    <ResourceContainer link={link} type={type}>
      <div className="px-4 py-2.5 flex flex-col justify-end h-full">
        <h2>{title}</h2>
        <p className="opacity-60">{description}</p>
      </div>
    </ResourceContainer>
  );
}
