import { ReactNode } from "react";

export interface GridCellProps {
  row: number | 'auto';
  column: number | 'auto';
  children: ReactNode;
}

export function GridCell({ row, column, children }: GridCellProps) {
  return (
    <div className="grid-cell" style={{ gridRow: row, gridColumn: column }}>
      {children}
    </div>
  );
}
