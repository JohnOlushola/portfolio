import Image from "next/image";
import { Resource } from "../types/resource";
import Caption from "./Caption";
import ResourceContainer from "./ResourceContainer";

interface PictureProps extends Resource {
  alt: string;
}

export default function Picture({
  src,
  alt,
  title,
  date,
  link,
  type,
}: PictureProps) {
  const pictureContent = (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="rounded-xl"
      />
      <Caption title={title} date={date} />
    </div>
  );

  return (
    <ResourceContainer link={link} type={type}>
      {pictureContent}
    </ResourceContainer>
  );
}
