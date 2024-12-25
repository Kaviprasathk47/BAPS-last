import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: theme.backgroundcolors.primary,
    borderRadius: theme.borderRadius.primary,
    margin: "0 auto",
    boxShadow:theme.boxshadows.bs1,
    padding: "16px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  viewAll: {
    color: theme.text.view.primary,
    cursor:theme.cursor.pointer,
    fontWeight:theme.text.fw.sixh,
  },
  list: {
    width: "100%",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    padding: "8px",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: theme.hover.primary,
    },
  },
  avatar: {
    width: "48px",
    height: "48px",
    marginRight: "16px",
  },
  primaryText: {
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: "12px",
    color: "red",
  },
}));

export default useStyles;
