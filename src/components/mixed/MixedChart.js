import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
ChartJs.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function RadarChart(props) {
  const fetchData = props.firstData.splice(0, 50);

  const dataChart = {
    labels: fetchData.map((d) => d.topic || d.region),
    datasets: [
      {
        type: "bar",
        label: "# By Barchart",
        data: fetchData.map((d) => d.intensity / 10),
        backgroundColor: "rgb(52, 235, 232)"
      },
      {
        type: "line",
        label: "# By Linechart",
        data: fetchData.map((d) => d.relevance),
        backgroundColor: "rgb(124, 235, 12)"
      },
      {
        type: "scatter",
        label: "# By Scatterchart",
        data: fetchData.map((d) => d.likelihood),
        backgroundColor: "rgb(149, 66, 245)"
      }
    ],
    options: {
      plugins: {
        legend: true
      }
    }
  };
  return (
    <div>
      <Bar data={dataChart} />
    </div>
  );
}

export default RadarChart;
