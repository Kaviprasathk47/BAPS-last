import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell} from "recharts";
import { chartStyles } from "./attendanceChartStyles";

const AttendanceChart = () => {
  const data = [
    { name: "No. of Workers", value: 25, color: "#D9931D" },
    { name: "No. of Students", value: 737, color: "#6A1B9A" },
    { name: "No. of Staffs", value: 30, color: "#E53935" },
  ];

  const [activeCategory, setActiveCategory] = useState(data[1]);

  const handleMouseEnter = (_, index) => {
    setActiveCategory(data[index]);
  };

  return (
    <Box sx={chartStyles.container}>
      <Typography variant="h6" sx={chartStyles.title}>
        Attendace Chart
      </Typography>
      <Box sx={chartStyles.chartWrapper}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            onMouseEnter={handleMouseEnter}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <Box sx={chartStyles.centerLabel}>
          <Typography variant="h5" sx={{ color: activeCategory.color }}>
            {activeCategory.name}
          </Typography>
          <Typography variant="h6" sx={chartStyles.value}>
            {activeCategory.value}
          </Typography>
        </Box>
      </Box>
      <Box sx={chartStyles.legend}>
        {data.map((entry, index) => (
          <Box key={index} sx={chartStyles.legendItem}>
            <Box
              sx={{
                ...chartStyles.legendDot,
                backgroundColor: entry.color,
              }}
            />
            <Typography variant="body2">{entry.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AttendanceChart;
