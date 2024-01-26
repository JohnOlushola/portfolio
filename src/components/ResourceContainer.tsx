import Link from "next/link";
import { Resource } from "../types/resource";

interface ResourceContainerProps extends Pick<Resource, "type" | "link"> {
  children: React.ReactNode;
}

export default function ResourceContainer({
  type,
  link,
  children,
}: ResourceContainerProps) {
  const LinkComponent = link?.external ? "a" : Link;

  return link ? (
    <LinkComponent
      href={link.url}
      target={link.target}
      className="overflow-hidden relative flex h-full w-full"
    >
      <div className="resource">{children}</div>
    </LinkComponent>
  ) : (
    <div className="overflow-hidden relative flex h-full w-full">
      <div className="resource">{children}</div>
    </div>
  );
}
