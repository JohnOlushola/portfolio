import Slider from "@/components/projects/Slider";
import SliderPro from "@/components/projects/SliderPro";
import { useState } from "react";
import uPlot from "uplot";

// generate date for every hour of the day since Jan 01, 2024 to Fri 29 Mar, 2024
const datetimes = Array.from({ length: 24 * 900 }, (_, i) => {
  const date = new Date("2024-01-01T00:00:00");
  date.setHours(date.getHours() + i);
  return date;
});

const yearsSet = new Set(datetimes.map((date) => date.getFullYear()));
const years = Array.from(yearsSet);
const yearsData = years.map((year) => ({
  name: year,
  year,
  uv: Math.floor(Math.random() * 100),
  pv: Math.floor(Math.random() * 100),
}));

const data = datetimes.map((date) => ({
  name: date.toLocaleString("en-US", { hour: "numeric", hour12: true }),
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
  temp: Math.floor(Math.random() * 100),
  uv: Math.floor(Math.random() * 100),
  pv: Math.floor(Math.random() * 100),
}));

export default function WeatherNavigatorPage() {
  const [currentWeather, setCurrentWeather] = useState(data[0]);

  const handleMouseOver = (entry) => {
    console.log({ entry });
  };

  const dataPro: uPlot.AlignedData = [
    datetimes.map((date) => date.getTime()),
    data.map((entry) => entry.temp),
  ];

  console.log({ dataPro });

  const options: uPlot.Options = {
    width: 1000,
    height: 400,
    series: [
      {
        // bar chart
        label: "Date",
        show: true,
        // spanGaps: false,
        stroke: "red",
        // width: 2,
      },
      {
        label: "Weather",
        stroke: "white",
        // gaps: true,
        fill: "rgba(255, 255, 255, 0.1)",
      },
    ],
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      {/* <h2 className="text-2xl mb-2">
        Current Weather: {currentWeather.temp} deg
      </h2> */}

      <div className="pl-96 w-screen h-32 flex flex-col space-y-6">
        {/* <Slider
          data={data}
          accentColor="red"
          valueKey="temp"
          barGap={10}
          accentIndex={30}
          onClick={handleMouseOver}
          onMouseDown={handleMouseOver}
        /> */}
        <SliderPro options={options} data={dataPro} />
        {/* <Slider data={data} accentColor="green" />
        <Slider data={data} accentColor="blue" /> */}
      </div>
    </div>
  );
}
