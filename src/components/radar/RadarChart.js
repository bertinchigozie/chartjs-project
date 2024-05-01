import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Legend,
  Tooltip,
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Filler
} from "chart.js";
ChartJs.register(
  Legend,
  Tooltip,
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Filler
);

function RadarChart(props) {
  const fetchData = props.firstData.splice(10, 30);
  const dataChart = {
    labels: fetchData.map((d) => (d.city ? d.city : d.region)),
    datasets: [
      {
        label: "# By Intensity",
        data: fetchData.map((d) => d.intensity),
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)"
      },
      {
        label: "# By Likelihood",
        data: fetchData.map((d) => d.likelihood),
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)"
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
      <Radar data={dataChart} />
    </div>
  );
}

export default RadarChart;
