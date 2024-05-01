import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Legend,
  BubbleController,
  ScatterController
} from "chart.js";
ChartJs.register(
  CategoryScale,
  LinearScale,
  ScatterController,
  PointElement,
  Tooltip,
  PointElement,
  Legend,
  BubbleController
);

function BubbleChart(props) {
  const fetchData = props.firstData.splice(0, 200);

  const dataChart = {
    labels: fetchData.map((d) => d.intensity / d.likelihood),
    datasets: [
      {
        label: "# By Relevance",
        data: fetchData.map((d) => {
          return {
            x: d.relevance,
            y: d.intensity,
            r: 10
          };
        }),
        backgroundColor: [
          "rgb(149, 66, 245)",
          "rgb(239, 66, 245)",
          "rgb(245, 66, 188)",
          "rgb(245, 66, 132)",
          "rgb(12, 161, 235)",
          "rgb(245, 66, 84)"
        ]
      },
      {
        label: "# By Intensity",
        data: fetchData.map((d) => {
          return {
            x: d.intensity,
            y: d.relevance,
            r: 6
          };
        }),
        backgroundColor: [
          "rgb(168, 74, 50)",
          "rgb(168, 50, 101)",
          "rgb(168, 50, 68)",
          "rgb(60, 50, 168)",
          "rgb(150, 50, 168)",
          "rgb(50, 133, 168)"
        ]
      }
    ],
    options: {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(255, 99, 132)"
          }
        }
      }
    }
  };
  return (
    <div>
      <Bubble data={dataChart} />
    </div>
  );
}

export default BubbleChart;
