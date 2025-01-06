import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "300px",
    padding: "20px",
    borderRadius: theme.borderRadius.primary,
    backgroundColor: theme.backgroundcolors.primary,
    boxShadow: theme.boxshadows.bs1,
    fontFamily: theme.typography.fontFamily,
  }
}));

export default useStyles;