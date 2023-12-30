import { ReactElement } from "react";
import { GridCellProps } from "./GridCell";

interface GridProps {
  rows: number;
  columns: number;
  children: ReactElement<GridCellProps>[];
}

export function Grid({ rows, columns, children }: GridProps) {
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
