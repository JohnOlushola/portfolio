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
      className="rounded-xl overflow-hidden border border-gray-600 p-1"
    >
      {children}
      {type && <LinkButton text={ResourceType[type]} />}
    </a>
  ) : (
    <div className="rounded-xl overflow-hidden">
      {children}
    </div>
  );
}
