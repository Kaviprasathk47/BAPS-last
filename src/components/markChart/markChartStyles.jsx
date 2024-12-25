import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "16px",
    backgroundColor: theme.backgroundcolors.primary,
    borderRadius: theme.borderRadius.primary,
    boxShadow: theme.boxshadows.bs1,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  label: {
    fontSize: theme.text.size,
    fontWeight: theme.text.fw.primary,
    color: theme.text.color.primary,
  },
  select: {
    fontSize: "14px",
    fontWeight: 400,
    "& .MuiSelect-icon": {
      color: theme.palette.secondary,
    },
  },
}));

export default useStyles;
