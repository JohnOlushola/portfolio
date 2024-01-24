import Image from "next/image";
import { Resource } from "../types/resource";
import Caption from "./Caption";
import ResourceContainer from "./ResourceContainer";

interface PictureResourceProps extends Resource {
  alt: string;
}

export default function PictureResource({
  src,
  alt,
  title,
  date,
  link,
  type,
}: PictureResourceProps) {
  return (
    <ResourceContainer link={link} type={type}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />
      <Caption title={title} date={date} />
    </ResourceContainer>
  );
}
