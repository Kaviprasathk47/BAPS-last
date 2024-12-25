import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./anouncementStyles";

const An = () => {
  const classes = useStyles();

  const [dateTime, setDateTime] = useState("01 April, 2021 | 03:00 PM");

  return (
    <Box className={classes.announcementContainer}>
      <Box className={classes.icon}></Box>
      <Box>
        <Typography className={classes.title}>Announcement</Typography>
        <Typography className={classes.timestamp}>{dateTime}</Typography>
      </Box>
    </Box>
  );
};

export default An;
