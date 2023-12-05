interface ColumnProps {
  children: React.ReactNode;
}

export default function Column({ children }: ColumnProps) {
  return <div className="md:w-1/3 h-fit flex flex-col gap-2">{children}</div>;
}
