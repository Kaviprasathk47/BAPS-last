import React, { useState } from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

const SelectTerm = () => {
  const [selectedTerm, setSelectedTerm] = useState("");

  const terms = ["Term 1", "Term 2", "Term 3"];

  const handleChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "6px",
        padding: "6px 12px",
        width: "120px",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          color: selectedTerm ? "#000" : "#a3a3a3",
          flexGrow: 1,
        }}
      >
        {selectedTerm || "Select Term"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "24px",
          height: "24px",
          backgroundColor: "#f8f3ff",
          borderRadius: "50%",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            color: "#a259ff",
          }}
        >
          ▼
        </Typography>
      </Box>

      <Select
        value={selectedTerm}
        onChange={handleChange}
        displayEmpty
        MenuProps={{
          PaperProps: {
            sx: {
              marginTop: "8px",
              borderRadius: "8px",
            },
          },
        }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        {terms.map((term, index) => (
          <MenuItem key={index} value={term}>
            {term}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectTerm;
