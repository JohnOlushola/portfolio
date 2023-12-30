import React from "react";
import { Grid } from "../../components/Grid";
import { GridCell } from "../../components/GridCell";

export default function GridPage() {
  return (
    <Grid rows={4} columns={4}>
      <GridCell row="auto" column={1}>
        What
      </GridCell>
      <GridCell row="auto" column={4}>
        will
      </GridCell>
      <GridCell row={2} column={3}>
        you
      </GridCell>
      <GridCell row={3} column={4}>
        ship
      </GridCell>
      <GridCell row={4} column="auto">
        ?
      </GridCell>
    </Grid>
  );
}
