import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useStyles from "./compareTStyles";
import { useTheme } from "@mui/material/styles";

const data = [
  { name: "01", term1: 50, term2: 40 },
  { name: "02", term1: 60, term2: 45 },
  { name: "03", term1: 70, term2: 50 },
  { name: "04", term1: 80, term2: 60 },
  { name: "05", term1: 90, term2: 70 },
  { name: "06", term1: 75, term2: 65 },
  { name: "07", term1: 85, term2: 55 },
  { name: "08", term1: 60, term2: 40 },
  { name: "09", term1: 70, term2: 50 },
  { name: "10", term1: 80, term2: 60 },
  { name: "11", term1: 90, term2: 70 },
  { name: "12", term1: 85, term2: 65 },
];

const CompareChart = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Button
          variant="outlined"
          className={classes.button}
          sx={{
            borderColor: theme.text.primary,
            color: theme.text.primary,
            "&:hover": {
              borderColor: theme.bars.secondary,
              backgroundColor: theme.bars.secondary,
            },
          }}
        >
          Select Subject
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          sx={{
            borderColor: theme.text.primary,
            color: theme.text.primary,
            "&:hover": {
              borderColor: theme.bars.secondary,
              backgroundColor: theme.bars.secondary,
            },
          }}
        >
          View Report
        </Button>
      </Box>
      <Typography variant="h6" className={classes.title}>
        Term Average
      </Typography>
      <Box className={classes.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="name"
              axisLine={{ stroke: theme.backgroundcolors.primary }}
              tickLine={false}
              style={{ fontSize: 12, fill: theme.palette.text.primary }}
            />
            <YAxis
              axisLine={{ stroke: theme.backgroundcolors.primary }}
              tickLine={false}
              style={{ fontSize: 12, fill: theme.palette.text.primary }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: theme.backgroundcolors.primary,
                color: theme.palette.text.primary,
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[2],
              }}
            />
            <Legend
              wrapperStyle={{
                color: theme.palette.text.primary,
              }}
            />
            <Bar dataKey="term1" fill={theme.bars.primary} name="Term I" />
            <Bar dataKey="term2" fill={theme.bars.secondary} name="Term II" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default CompareChart;
