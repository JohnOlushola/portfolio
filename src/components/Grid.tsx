interface GridProps {
  children: React.ReactNode;
}

export default function Grid({ children }: GridProps) {
  return (
    <div className="flex flex-col md:flex-row w-auto gap-2">{children}</div>
  );
}
