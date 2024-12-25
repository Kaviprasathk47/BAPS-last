import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#F9F9F9",
    height: "100vh",
  },
  dashtitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    width: "100%",
  },
  dashTypography: {
    fontWeight: 600,
    fontSize: "20px",
  },
  contentContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    width: "100%",
  },
  leftSection: {
    flex: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    minWidth: "300px",
  },
  rightSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "250px",
  },
  attendance: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  notifications: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  eventActivitiesSection: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    width: "100%",
  },
  eventSection: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  activitiesSection: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  "@media (max-width: 768px)": {
    container: {
      padding: "10px",
    },
    contentContainer: {
      flexDirection: "column",
    },
    leftSection: {
      minWidth: "100%",
      marginBottom: "20px",
    },
    rightSection: {
      minWidth: "100%",
    },
    eventActivitiesSection: {
      flexDirection: "column",
      gap: "10px",
    },
    eventSection: {
      width: "100%",
    },
    activitiesSection: {
      width: "100%",
    },
  },
}));

export default useStyles;
