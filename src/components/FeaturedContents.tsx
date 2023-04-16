import FeaturedContentItem, {
  FeaturedContentItemProps,
} from "./FeaturedContentItem";

interface FeaturedContentsProps {
  contents: FeaturedContentItemProps[];
}

const FeaturedContents: React.FC<FeaturedContentsProps> = ({ contents }) => {
  return (
    <div className="flex flex-col overflow-y-scroll h-[200px] gap-4 snap-mandatory snap-y scroll-smooth">
      {contents.map((content, index) => (
        <FeaturedContentItem
          key={`featured-content-${index}`}
          title={content.title}
          description={content.description}
          image={content.image}
          alt={content.alt}
          onClick={content.onClick}
        />
      ))}
    </div>
  );
};

export default FeaturedContents;
