import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 300,
    backgroundColor: theme.backgroundcolors.primary,
    padding: "16px",
    borderRadius: "8px",
    boxShadow:theme.boxshadows.bs1,   
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",   
  },
  title: {
    fontWeight: 800,
  },
  button: {
    textTransform: "none",
    fontSize: 14,
    color: "#6C63FF",
    boxShadow: theme.backgroundcolors.primary,
    borderRadius: "4px",
    "&:hover": {
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
      backgroundColor: "rgba(108, 99, 255, 0.1)",
    },
  },
  subheader: {
    color: "gray",
    marginBottom: "16px",   
    fontSize: 12,
  },
  chartContainer: {
    width: "100%",
    height: 200,
  },
  legendContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16px",   
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    marginRight: "16px",   
    fontSize: 14,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    marginRight: "8px",   
  },
  legendText: {
    fontSize: 14,
    marginRight: "8px",
  },
  legendValue: {
    fontSize: 14,
    color: "gray",
  },
}));

export default useStyles;
