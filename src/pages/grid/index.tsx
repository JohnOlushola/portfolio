import React from "react";
import { Grid } from "../../components/Grid";
import { GridCell } from "../../components/GridCell";

export default function GridPage() {
  return (
    <Grid rows={4} columns={4}>
      <GridCell row="auto" column={1}>
        <div className="p-2.5 flex flex-col justify-between h-full">
          <div>
            <h1 className="">Olushola Temiloluwa John</h1>
            <p className="opacity-60">Software Engineer</p>
          </div>
          <div>
            <p className="opacity-60">
              I work as a frontend engineer. I like to build things for
              designers and developers, and think deeply about the user
              interface, how it looks, feels, behaves. Also interested in
              Artificial Intelligence.
            </p>
          </div>
        </div>
      </GridCell>
      <GridCell row={4} column={4}>
        ?
      </GridCell>
    </Grid>
  );
}
