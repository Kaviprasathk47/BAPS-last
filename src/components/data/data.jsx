import React from "react";
import ChartFile from "../attendanceChartPop/chart/attendanceChart"; 


const App = () => {
  const labels = ["Apples", "Oranges", "Bananas"];
  const seriesData = [44, 55, 41];

  return (
    <div>
      <ChartFile labels={"Apples"} seriesData={40} />
    </div>
  );
};

export default App;