interface CaptionProps {
  title?: string;
  date?: number;
}

export default function Caption({ title, date }: CaptionProps) {
  if (!title && !date) return <></>;

  return (
    <div className="absolute z-10 left-0 bottom-0 w-full flex justify-between px-4 py-2 text-white">
      {title && <p>{title}</p>}
      {title && <p>{date}</p>}
    </div>
  );
}
