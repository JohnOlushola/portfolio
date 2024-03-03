import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  columns: number;
  rows: number;
}

export function Grid({ children, columns, rows }: GridProps) {
  return (
    // @ts-ignore
    <div className="grid" style={{ "--rows": rows, "--columns": columns }}>
      <div className="grid-guides">
        {Array.from({ length: rows * columns }, (_, index) => {
          // Calculate the x and y position of the cell
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;

          return (
            <div
              key={`grid-guide-${index}`}
              className="grid-guide"
              // @ts-ignore
              style={{ "--x": x, "--y": y }}
            />
          );
        })}
      </div>
      {/* Cells will render here */}
      {children}
    </div>
  );
}
