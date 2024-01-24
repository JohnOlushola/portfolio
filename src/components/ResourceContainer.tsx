import LinkButton from "./LinkButton";
import { Resource, ResourceType } from "../types/resource";

interface ResourceContainerProps extends Pick<Resource, "type" | "link"> {
  children: React.ReactNode;
}

export default function ResourceContainer({
  type,
  link,
  children,
}: ResourceContainerProps) {
  return link ? (
    <a
      href={link.url}
      target={link.target}
      className="overflow-hidden relative resource-caption flex h-full"
    >
      {children}
      {type && <LinkButton text={ResourceType[type]} />}
    </a>
  ) : (
    <div className="overflow-hidden relative flex h-full">
      <div className="resource-caption">{children}</div>
    </div>
  );
}
