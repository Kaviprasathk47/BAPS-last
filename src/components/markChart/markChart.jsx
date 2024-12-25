import React from "react";
import { Box} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import useStyles from "./markChartStyles";

const termData = [
  { name: "Maths", value: 10 },
  { name: "Physics", value: 60 },
  { name: "English", value: 50 },
  { name: "Cs", value: 40 },
  { name: "Tamil", value: 80 },
];

const Chart = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={termData} barSize={40}>
          <CartesianGrid vertical={false} stroke="#F0F0F0" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <Bar dataKey="value" fill="#897AF8" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
