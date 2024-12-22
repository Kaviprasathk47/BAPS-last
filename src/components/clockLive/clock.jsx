import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { clockStyles } from './clockStyles';

function LiveClock() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [meridian, setMeridian] = useState(new Date().getHours() >= 12 ? 'PM' : 'AM');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const currentHours = currentTime.getHours();
      setHours(currentHours % 12 || 12);
      setMinutes(currentTime.getMinutes());
      setSeconds(currentTime.getSeconds());
      setMeridian(currentHours >= 12 ? 'PM' : 'AM');
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <Box sx={clockStyles.clockdesign}>
      <Typography sx={clockStyles.hour}>{formatTime(hours)}</Typography>
      <Box sx={clockStyles.diline}/>
      <Typography sx={clockStyles.minute}>{formatTime(minutes)}</Typography>
      <Typography sx={clockStyles.second}>{formatTime(seconds)}</Typography>
      <Typography sx={clockStyles.mer}>{meridian}</Typography>
    </Box>
  );
}

export default LiveClock;