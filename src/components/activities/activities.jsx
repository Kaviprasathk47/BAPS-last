import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { activitiesStyles } from "./activitiesStyles";

const Activities = () => {
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
    <Box sx={activitiesStyles.container}>
      <Typography variant="h6" sx={activitiesStyles.title}>
        Recent Activities
      </Typography>
      <Box sx={activitiesStyles.activityList}>
        {activities.map((activity, index) => (
          <Box key={index} sx={activitiesStyles.activityItem}>
            <Box
              sx={{
                ...activitiesStyles.dot,
                backgroundColor: activity.color,
              }}
            />
            <Typography variant="body2" sx={activitiesStyles.label}>
              {activity.label}
            </Typography>
            <Typography variant="caption" sx={activitiesStyles.time}>
              {activity.time}
            </Typography>
          </Box>
        ))}
      </Box>
      <Link href="#" sx={activitiesStyles.viewAll}>
        View All →
      </Link>
    </Box>
  );
};

export default Activities;
