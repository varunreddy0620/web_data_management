// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Project", "count"],
  ["Future Projects", 2],
  ["InCompleted Projects", 2],
  ["Current Projects", 2],
  ["Completed Projects", 11],
 
];

export const options = {
  title: "My Projects",
  pieHole: 0.4,
  is3D: false,
};

export default function Piechart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}