import React from "react";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./activitiesStyles";

const Activities = () => {
  const classes = useStyles();
  const activities = [
    { label: "Rebooted Server", time: "17:00", color: "blue" },
    { label: "Server Online", time: "18:00", color: "purple" },
    { label: "Student A document updated", time: "Just Now", color: "blue" },
    { label: "Student B applied leave", time: "2 min ago", color: "green" },
    { label: "Teacher B reported a leave", time: "14:00", color: "red" },
    { label: "Class 6 B Attendance updated", time: "16:00", color: "black" },
    { label: "Class 8 A Attendance updated", time: "17:00", color: "orange" },
  ];

  return (
    <Box className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        Recent Activities
      </Typography>
      <Box className={classes.activityList}>
        {activities.map((activity, index) => (
          <Box key={index} className={classes.activityItem}>
            <Box
              className={classes.dot}
              style={{ backgroundColor: activity.color }}
            />
            <Typography variant="body2" className={classes.label}>
              {activity.label}
            </Typography>
            <Typography variant="caption" className={classes.time}>
              {activity.time}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className={classes.viewAllContainer}>
        <Button className={classes.viewAll}>
          View All →
        </Button>
      </Box>
    </Box>
  );
};

export default Activities;
