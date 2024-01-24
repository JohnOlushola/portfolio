interface CaptionProps {
  title?: string;
  date?: string;
}

export default function Caption({ title, date }: CaptionProps) {
  if (!title && !date) return <></>;

  return (
    <div className="absolute z-10 left-0 bottom-0 w-full flex justify-between px-3 py-2">
      {title && <p>{title}</p>}
      {title && <p>{date}</p>}
    </div>
  );
}
