import { ReactNode, useEffect, useState } from "react";
import { projects } from "../constants/projects";

type Breakpoint = "sm" | "md" | "lg" | "xl";

const columnsValue: Record<Breakpoint, number> = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
};

interface GridProps {
  children: ReactNode;
}

export function Grid({ children }: GridProps) {
  const columns = 3;
  const rows = Math.ceil((projects.length + 1) / columns);

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
