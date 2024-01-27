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
  const className = "overflow-hidden relative flex h-full w-full hover:ring-2 hover:ring-[#7AE582] focus:ring-2 focus:ring-[#7AE582]";

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
