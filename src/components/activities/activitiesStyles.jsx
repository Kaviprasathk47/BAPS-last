import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "300px",
    padding: "20px",
    borderRadius: theme.borderRadius.primary,
    backgroundColor: theme.backgroundcolors.primary,
    boxShadow: theme.boxshadows.bs1,
    fontFamily: theme.typography.fontFamily,
  },
  title: {
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
    color: theme.text.color.secondary,
  },
  viewAllContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  viewAll: {
    color: theme.text.view.primary,
    cursor: theme.cursor.pointer,
    fontWeight: theme.text.fw.sixh,
  },
}));

export default useStyles;
