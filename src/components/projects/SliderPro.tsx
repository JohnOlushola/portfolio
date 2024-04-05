import React from "react";
import uPlot from "uplot";
import UplotReact from "uplot-react";
import "uplot/dist/uPlot.min.css";

interface SliderProProps {
  options: uPlot.Options;
  data: uPlot.AlignedData;
  target?: HTMLElement | ((self: uPlot, init: Function) => void);
  onDelete?: (chart: uPlot) => void;
  onCreate?: (chart: uPlot) => void;
}

export default function SliderPro({
  options,
  data,
  target,
  onDelete,
  onCreate,
}: SliderProProps) {
  return (
    <div>
      <UplotReact
        options={options}
        data={data}
        target={target}
        onCreate={onDelete}
        onDelete={onCreate}
      />
    </div>
  );
}
