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
}: PictureResourceProps) {
  return (
    <ResourceContainer link={link}>
      <div className="resource">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="h-full w-full object-contain object-center"
        />
        <Caption title={title} date={date} />
      </div>
    </ResourceContainer>
  );
}
