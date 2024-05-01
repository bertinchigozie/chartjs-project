import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
} from "chart.js";
ChartJs.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

function BarChart(props) {
  const [filterData, setFilterData] = useState([]);
  const [filterLabels, setFilterLabels] = useState([]);
  const [filterLabel, setFilterLabel] = useState("");
  const fetchData = props.firstData.splice(0, 20);
  const dataChart = {
    labels: filterLabels.map((d) => d),
    datasets: [
      {
        label: filterLabel,
        data: filterData.map((d) => d),
        backgroundColor: "rgb(52, 235, 232)"
      }
    ],
    options: {
      plugins: {
        legend: true
      }
    }
  };
  const dataVal = [];
  const newDataVal = [];
  const newDataKey = [];
  let counts = {};

  const filter = (e) => {
    fetchData.forEach((d) => {
      for (const [key, value] of Object.entries(d)) {
        if (key === e) {
          dataVal.push(value);
        }
      }
    });
    for (let i = 0; i < dataVal.length; i++) {
      let value = dataVal[i];
      if (value !== "") {
        counts[value] = (counts[value] || 0) + 1;
      }
    }
    for (const [newKey, newValue] of Object.entries(counts)) {
      newDataVal.push(newValue);
      newDataKey.push(newKey);
    }
    setFilterData(newDataVal);
    setFilterLabels(newDataKey);
  };

  return (
    <div>
      <select
        onChange={(e) => {
          filter(e.target.value);
          setFilterLabel(e.target.value.toUpperCase());
        }}
      >
        <option value="">Filter Data</option>
        <option value="end_year" defaultValue={"end_year"}>
          End Year
        </option>
        <option value="topic">Topics</option>
        <option value="sector">Sector</option>
        <option value="intensity">Intensity</option>
        <option value="region">Region</option>
        <option value="pestle">Pest</option>
        <option value="source">Source</option>
        <option value="swot">Swot</option>
        <option value="country">Country</option>
        <option value="city">City</option>
      </select>
      <Bar data={dataChart} />
    </div>
  );
}

export default BarChart;
