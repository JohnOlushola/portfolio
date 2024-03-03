interface CaptionProps {
  title?: string;
  date?: number;
}

export default function Caption({ title, date }: CaptionProps) {
  return (
    <div className="absolute z-10 left-0 bottom-0 w-full inline-flex gap-4 justify-between px-2 py-2 text-white">
      {title && <p>{title}</p>}
      {date && <p className="ml-auto">{date}</p>}
    </div>
  );
}
