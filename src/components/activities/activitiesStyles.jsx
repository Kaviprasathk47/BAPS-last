export const activitiesStyles = {
    container: {
      width: "300px",
      padding: "20px",
      borderRadius: "5px",
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Poppins', sans-serif",
    },
    title: {
      fontWeight: "bold",
      marginBottom: "15px",
    },
    activityList: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    activityItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    dot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    label: {
      flexGrow: 1,
      marginLeft: "10px",
      fontSize: "14px",
    },
    time: {
      color: "#888",
      fontSize: "12px",
    },
    viewAll: {
      marginTop: "20px",
      textAlign: "center",
      display: "block",
      color: "#1976D2",
      textDecoration: "none",
      transition: "letter-spacing 0.5s ease, color 0.5s ease",
      "&:hover": {
        letterSpacing: "2px",
      },
    },
  };
  