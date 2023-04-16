import Image, { StaticImageData } from "next/image";

export interface FeaturedContentItemProps {
  title: string;
  description?: string;
  image: string | StaticImageData;
  alt: string;
  onClick?: () => void;
}

const FeaturedContentItem: React.FC<FeaturedContentItemProps> = ({
  image,
  alt,
  description,
  onClick,
}) => {
  return (
    <div className="relative group w-full snap-center" onClick={onClick}>
      <Image src={image} className="object-cover h-[200px]" alt={alt} />
      <div className="caption invisible group-hover:visible">
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedContentItem;
