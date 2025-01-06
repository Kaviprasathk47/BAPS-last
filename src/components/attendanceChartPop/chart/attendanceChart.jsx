import React, { useState } from "react";
import Chart from "react-apexcharts";
import "../../data/data";
import "@fontsource/poppins"; // Import Poppins font

const RadialBarChart = ({ labels, seriesData }) => {
  console.log(labels, seriesData);
  const [options, setOptions] = useState({
    series: [76, 32, 21],
    chart: {
      height: 300,
      type: "radialBar",
      zoom: { enabled: false },
      toolbar: { show: false },
      fontFamily:'Poppins',
    },
    colors: ["#4361ee", "#805dca", "#e2a03f"],
    grid: {
      borderColor: "#e0e6ed",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
            style: { fontFamily: "Poppins" },
          },
          value: {
            fontSize: "16px",
            style: { fontFamily: "Poppins" },
          },
          total: {
            show: true,
            label: "Total",
            formatter: () => 249,
            style: { fontFamily: "Poppins" },
          },
        },
      },
    },
    labels: ["Staffs", "Non-Teaching", "Teacher"],
    fill: {
      opacity: 0.85,
    },
  });

  return (
    <div className="bg-white rounded-lg">
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
