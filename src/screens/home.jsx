import React from "react";
import { Box, Typography ,Button} from "@mui/material";
import MarkChart from "../components/markChart/markChart";
import Attendance from "../components/attendanceChart/attendanceChart";
import Notifications from "../components/notificationStat/notification";
import useStyles from "./screenStyles/homeStyles";
import Comp from "../components/compare/compareT";
import Event from "../components/eventScreen/event";
import Activities from "../components/activities/activities";
import SelectTerm from "../components/selectTerm/selectTerm";
import An from "../components/anounment/anouncement";
import NavBar from "../components/navBar/sideBar";
import Chart2 from '../components/attendanceChartPop/attendanceChart2'


const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.dashtitle}>
        <Typography className={classes.dashTypography}>Dashboard</Typography>
        <An />
      </Box>

      <Box className={classes.contentContainer}>
        <Box className={classes.leftSection}>
          <Box className={classes.leftContent}>
            <Box>
              <SelectTerm />
              <MarkChart />
            </Box>
            <Comp />
          </Box>
        </Box>
        <Box className={classes.rightSection}>
          <Box className={classes.attendance}>
            <Attendance />
          </Box>
          <Box className={classes.notifications}>
            <Notifications />
          </Box>
        </Box>
        <Box className={classes.eventActivitiesSection}>
          <Box className={classes.eventSection}>
            <Event />
          </Box>
          <Box className={classes.activitiesSection}>
            <Box>
              <Activities />
            </Box>
            <Box>
              <Chart2/>
            </Box>
          </Box>
        </Box>
      </Box>
      
      <NavBar/>
    </Box>
  );
};

export default Home;