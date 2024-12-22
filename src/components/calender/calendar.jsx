import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { calendarStyles } from './calendarStyles';

const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 0);
  return date.getDate();
};

const getFirstDayOfMonth = (month, year) => {
  const date = new Date(year, month - 1, 1);
  return date.getDay();
};

const Calendar = () => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const daysInMonth = getDaysInMonth(month + 1, year);
  const firstDayOfMonth = getFirstDayOfMonth(month + 1, year);

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const emptySlots = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptySlots.push(null);
  }

  const calendarSlots = [...emptySlots, ...days];

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const goToPreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const goToToday = () => {
    const today = new Date();
    setMonth(today.getMonth());
    setYear(today.getFullYear());
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <Box sx={calendarStyles.borderstyle}>
      <Box sx={calendarStyles.calendarContainer}>
        <Box sx={calendarStyles.header}>
          <Button sx={calendarStyles.button} onClick={goToPreviousMonth}>Previous</Button>
          <Box sx={calendarStyles.monthTitle}>{monthNames[month]} {year}</Box>
          <Button sx={calendarStyles.button} onClick={goToNextMonth}>Next</Button>
        </Box>

        <Box sx={calendarStyles.calendarGrid}>
          <Box sx={calendarStyles.weekdays}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <Box
                key={day}
                sx={[
                  calendarStyles.weekday,
                  (index === 0 || index === 6) && calendarStyles.redText,
                ]}
              >
                {day}
              </Box>
            ))}
          </Box>

          <Box sx={calendarStyles.days}>
            {calendarSlots.map((day, index) => {
              const isWeekend = (index + firstDayOfMonth) % 7 === 0 || (index + firstDayOfMonth) % 7 === 6;
              const isToday = day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear();

              return (
                <Box
                  key={index}
                  sx={[
                    calendarStyles.day,
                    day === null && calendarStyles.empty,
                    isWeekend && calendarStyles.weekendDay,
                    isToday && calendarStyles.highlightToday,
                  ]}
                >
                  {day || ''}
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <Button sx={calendarStyles.todayButton} onClick={goToToday}>Today</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
