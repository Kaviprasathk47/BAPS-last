import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "5vh 0",
    width: "100%",
  },
  termtitle: {
    "&.MuiTypography-root": {
      fontSize: "2rem",
      fontWeight: "bolder",
      color: "#0c67a3",
    },
  },
  
  tablecontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    width: "80%",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  feessum: {
    marginTop: "2rem",
    fontSize: "1.2rem",
    color: "#0c67a3",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    backgroundColor: "#f1f1f1",
    padding: "1rem",
    borderRadius: "8px",
    "& .MuiTypography-root": {
      fontSize: "1rem",
    },
  },
  
}));

export default useStyles;
