import { Box } from '@mui/material';
import Calendar from '../components/calender/calendar';
import Event from '../components/eventScreen/event';
import { homeStyles } from './screenStyles/homeStyles';
import Clock from '../components/clockLive/clock';
import Activity from '../components/activities/activities';
import AChart from '../components/attendanceChart/attendanceChart';
import { useEffect } from 'react';


function HomePage() {

    useEffect(() =>{
        document.title = 'B A P S - Home';
    },[])

    return (
        <Box sx={{ ...homeStyles.body, ...homeStyles.homeCont }}>
            <Box sx={homeStyles.container}>
                <Box sx={homeStyles.calendarCont}>
                    <Calendar />
                </Box>

                <Box sx={homeStyles.eventContainer}>
                    <Event />
                </Box>
            </Box>
            <Box sx={homeStyles.seccontainer}>
                <Box sx={homeStyles.clockCont}>
                    <Clock/>
                </Box>

                <Box sx={homeStyles.actContainer}>
                    <Activity/>
                </Box>

                <Box sx={homeStyles.artcontainer}>
                    <AChart/>
                </Box>
            </Box>
            
        </Box>
    );
}

export default HomePage;
