import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  Tooltip,
  LineController,
  LineElement,
  PointElement,
  Legend
} from "chart.js";
ChartJs.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  LineController,
  LineElement,
  PointElement,
  Legend
);

function LineChart(props) {
  const fetchData = props.firstData.splice(1, 60);
  const dataChart = {
    labels: fetchData.map((d) => d.region),
    datasets: [
      {
        label: "# By Relevance",
        data: fetchData.map((d) => d.relevance),
        backgroundColor: [
          "rgb(86, 235, 12)",
          "rgb(124, 235, 12)",
          "rgb(12, 235, 112)",
          "rgb(12, 235, 220)",
          "rgb(12, 161, 235)",
          "rgb(12, 235, 153)"
        ]
      },
      {
        label: "# By Intensity",
        data: fetchData.map((d) => d.intensity / d.relevance),
        backgroundColor: [
          "rgb(168, 74, 50)",
          "rgb(168, 50, 101)",
          "rgb(168, 50, 68)",
          "rgb(60, 50, 168)",
          "rgb(150, 50, 168)",
          "rgb(50, 133, 168)"
        ]
      }
    ]
  };
  return (
    <div>
      <Line data={dataChart} />
    </div>
  );
}

export default LineChart;
