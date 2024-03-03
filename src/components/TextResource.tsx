import ResourceContainer from "./ResourceContainer";
import { Resource } from "../types/resource";

interface TestResourceProps extends Resource {
  description: React.ReactNode | string;
}

export default function TextResource({
  title,
  link,
  description,
}: TestResourceProps) {
  return (
    <ResourceContainer link={link}>
      <div className="px-2 py-2 flex flex-col justify-end h-full">
        <h2 className="mb-2">{title}</h2>

        {typeof description === "string" ? (
          <p className="text-sm">{description}</p>
        ) : (
          description
        )}
      </div>
    </ResourceContainer>
  );
}
