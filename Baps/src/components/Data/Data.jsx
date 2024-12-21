import React from "react";
import ChartFile from "../dashboard/Charts.jsx"; 


const App = () => {
  // Example dynamic data
  const labels = ["Apples", "Oranges", "Bananas"];
  const seriesData = [44, 55, 41];

  return (
    <div>
      <ChartFile labels={"Apples"} seriesData={40} />
    </div>
  );
};

export default App;
