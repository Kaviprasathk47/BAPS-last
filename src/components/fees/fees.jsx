import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { MenuItem, Select, FormControl, InputLabel, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SideBar from "../navBar/sideBar";
import useStyles from "./feesStyles";


const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    fontSize: 18,
    fontWeightBold: 700,
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: "Poppins, Arial, sans-serif",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
        },
        body: {
          fontFamily: "Poppins, Arial, sans-serif",
          fontSize: "18px",
          textAlign: "center",
        },
      },
    },
  },
});

const termData = {
  "I Term": [
    { Amount: 250000, Discount: "Nil", Fine: "500", Paid: 20000, Total: 250000 },
  ],
  "II Term": [
    { Amount: 300000, Discount: "Nil", Fine: "Nil", Paid: 30000, Total: 300000 },
  ],
  "III Term": [
    { Amount: 350000, Discount: "2000", Fine: "Nil", Paid: 50000, Total: 350000 },
  ],
};

const paidDates = {
  "I Term": "2025-01-01",
  "II Term": "2025-05-01",
  "III Term": "2025-09-01",
};

const dues = {
  "I Term": 30000,
  "II Term": 0,
  "III Term": 50000,
};

export default function BasicTable() {
  const classes = useStyles();
  const [selectedTerm, setSelectedTerm] = React.useState("II Term");
  const rows = termData[selectedTerm];
  const date_of_paid = paidDates[selectedTerm];
  const dues_pending = dues[selectedTerm];

  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.container}>
        <SideBar />
        <Typography className={classes.termtitle}>Tuition Fees</Typography>

        <FormControl sx={{ minWidth: 200, margin: "2.5rem 0" }}>
          <InputLabel>Select Term</InputLabel>
          <Select
            value={selectedTerm}
            onChange={handleTermChange}
            label="Select Term"
          >
            {Object.keys(termData).map((term) => (
              <MenuItem key={term} value={term}>
                {term}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TableContainer className={classes.tablecontainer}>
          <Table sx={{ minWidth: 600, maxWidth: 850 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Amount</TableCell>
                <TableCell align="right">Discount</TableCell>
                <TableCell align="right">Fine</TableCell>
                <TableCell align="right">Paid</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.Amount}
                  </TableCell>
                  <TableCell align="right">{row.Discount}</TableCell>
                  <TableCell align="right">{row.Fine}</TableCell>
                  <TableCell align="right">{row.Paid}</TableCell>
                  <TableCell align="right">{row.Total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className={classes.feessum}>
          <Typography>Paid Date: {date_of_paid}</Typography>
          <Typography>Dues Pending: ₹{dues_pending}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
