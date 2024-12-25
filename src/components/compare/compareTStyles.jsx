import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "16px",
    backgroundColor:theme.backgroundcolors.primary,
    borderRadius: "4px",
    boxShadow:theme.boxshadows.bs1,
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
  },
  button: {
    color: theme.button.primary,
    borderColor:'grey',
    boxShadow:theme.boxshadows.bs1,
    border:'0.5px grey',
    textTransform: "none",
    border: "none",
    outline: "none",
    "&:focus": {
      outline: "none",
    },
  },
  title: {
    margin: "16px 0 32px 30px",
    textAlign: "left",
    fontWeight: 500,
    fontSize: theme.text.size,
    color: "#333",
  },
  chartContainer: {
    height: "300px",
  },
}));

export default useStyles;
