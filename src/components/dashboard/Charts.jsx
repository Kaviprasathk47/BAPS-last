import React, { useState } from "react";
import Chart from "react-apexcharts";
import '../Data/Data.jsx'

const RadialBarChart = ({ labels, seriesData }) => {
  console.log(labels,seriesData);
  const [options, setOptions] = useState({
    // series: seriesData,
    series:[76,32,21],
    chart: {
      height: 300,
      type: "radialBar",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: ["#4361ee", "#805dca", "#e2a03f"],
    grid: {
      borderColor: "#e0e6ed", // Use default border color
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: { fontSize: "22px" },
          value: { fontSize: "16px" },
          total: {
            show: true,
            label: "Total",
            formatter: () => 249, // Customize this as needed
          },
        },
      },
    },
    labels: ["Staffs","Non-Teaching","Teacher"], // Use dynamic labels passed from App
    fill: {
      opacity: 0.85,
    },
  });

  return (
    <div className="bg-white rounded-lg ">
      <Chart
        options={options}
        series={options.series}
        type="radialBar"
        height={300}
      />
    </div>
  );
};

export default RadialBarChart;
