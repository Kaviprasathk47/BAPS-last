// leaveFormStyles.jsx
import { makeStyles } from "@mui/styles";

const useLeaveFormStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    paddingLeft: "288px",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    width: "100%",
    maxWidth: "800px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inputField: {
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    padding: "8px 12px",
    width: "100%",
    outline: "none",
    '&:focus': {
      borderColor: "#0c67a3",
    },
  },
  buttonGroup: {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
  },
  submitButton: {
    color: "#ffffff",
    marginTop: "16px",
    padding: "10px",
    textTransform: "none",
    '&:hover': {
      backgroundColor: "#094c75",
    },
  },
  textarea: {
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    padding: "8px 12px",
    width: "100%",
    resize: "none",
    outline: "none",
    '&:focus': {
      borderColor: "#0c67a3",
    },
  },
});

export default useLeaveFormStyles;