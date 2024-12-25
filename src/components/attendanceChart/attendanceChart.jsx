import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useStyles from "./attendanceChartStyles";

const data = [
  { name: "Present", value: 40 },
  { name: "Absent", value: 32 },
];

const COLORS = ["#6C63FF", "#D7D7FF"];

const AttChart = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="subtitle1" className={classes.title}>
          Attendance
        </Typography>
        <Button className={classes.button} variant="text">
          View Details
        </Button>
      </Box>
      <Typography className={classes.subheader} variant="body2">
        From 1-6 Dec, 2020
      </Typography>
      <ResponsiveContainer className={classes.chartContainer} width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Box className={classes.legendContainer}>
        {data.map((item, index) => (
          <Box key={index} className={classes.legendItem}>
            <Box
              className={classes.legendDot}
              style={{ backgroundColor: COLORS[index] }}
            />
            <Typography className={classes.legendText}>{item.name}</Typography>
            <Typography className={classes.legendValue}>{item.value}%</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AttChart;
