import React, { useEffect, useState } from "react";
import LineChart from "../line/LineChart";
import BarChart from "../bar/BarChart";
import MixedChart from "../mixed/MixedChart";
import BubbleChart from "../bubble/BubbleChart";
import RadarChart from "../radar/RadarChart";

function Dashboard() {
  const [firstData, setFirstData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://chartapi.onrender.com/");
      if (!res.ok) throw new Error("Something went wrong. Please, Try Again.");

      const result = await res.json();
      setFirstData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <BarChart firstData={firstData} />
      <LineChart firstData={firstData} />
      <BubbleChart firstData={firstData} />
      <MixedChart firstData={firstData} />
      <RadarChart firstData={firstData} />
    </div>
  );
}

export default Dashboard;
