export const calendarStyles = {
  calendarContainer: {
    width: 300,
    margin: '20px auto',
    fontFamily: "'Poppins', sans-serif",
    borderRadius: '5px',
    padding: '10px',
    backgroundColor:"white",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },

  borderstyle:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#1976D2',
    },
  },
  todayButton: {
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#1976D2',
    },
  },
  monthTitle: {
    margin: 0,
    fontSize: 18,
  },
  calendarGrid: {
    display: 'flex',
    flexDirection: 'column',
  },
  weekdays: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
  },
  weekday: {
    padding: '5px',
  },
  days: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '5px',
    textAlign: 'center',
  },
  day: {
    padding: '10px',
    border: '0px solid #ddd',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f0f0f0',
      borderRadius: '50px',
      fontWeight: '600',
      color: '#2196F3',
    },
  },
  empty: {
    backgroundColor: '#f9f9f9',
    border: 'none',
  },
  redText: {
    color: 'red',
  },
  highlightToday: {
    backgroundColor: '#2196F3',
    color: 'white',
    fontWeight: 'bold',
    border: '0px solid #2196F3',
    borderRadius: '50px',
  },
};
