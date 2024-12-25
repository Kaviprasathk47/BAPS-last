import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  announcementContainer: {
    width:'298px',
    height:'56px',
    display: "flex",
    alignItems: "center",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "#ffe5cc",
    marginRight: "12px",
  },
  title: {
    fontWeight: 600,
    fontSize: "16px",
    color: "#000",
    marginBottom: "4px",
  },
  timestamp: {
    fontSize: "14px",
    color: "#7d7d7d",
  },
}));

export default useStyles;
