import Link from "next/link";
import { Resource } from "../types/resource";

interface ResourceContainerProps
  extends Pick<Resource, "type" | "link" | "media"> {
  children: React.ReactNode;
}

export default function ResourceContainer({
  link,
  children,
}: ResourceContainerProps) {
  const LinkComponent = link?.external ? "a" : Link;
  const className =
    "overflow-hidden relative flex h-full w-full hover:ring-2 hover:ring-green-500 focus:ring-2 focus:ring-gray-500";

  return link ? (
    <LinkComponent
      href={link.url}
      target={link.external ? "_blank" : "_self"}
      className={className}
    >
      <div className="resource">{children}</div>
    </LinkComponent>
  ) : (
    <div className={className}>
      <div className="resource">{children}</div>
    </div>
  );
}
