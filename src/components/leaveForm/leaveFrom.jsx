
import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import SideBar from '../navBar/sideBar.jsx';
import GlobalBtn from '../Button/reuseButton/reuseBtn.jsx';
import useLeaveFormStyles from "./leaveFormStyles.jsx";

const LeaveForm = () => {
  const classes = useLeaveFormStyles();
  const [selectedBtnFrm, setSelectedBtnFrm] = useState(null);
  const [selectedBtnTo, setSelectedBtnTo] = useState(null);
  const [inputTypeFrm, setInputTypeFrm] = useState("text");
  const [inputTypeTo, setInputTypeTo] = useState("text");
  const [selectDateFrm, SetselectDateFrm] = useState();
  const [selectDateTo, SetselectDateTo] = useState();
  const [ReasonValue, SetReasonValue] = useState();

  const navigate = useNavigate();

  const handleValuesDate = (state_date, e) => {
    const newValue = e.target.value;
    if (state_date === "from") {
      SetselectDateFrm(newValue);
    } else {
      SetselectDateTo(newValue);
    }
  };

  const navigateFunction = (event) => {
    event.preventDefault();
    navigate("/LeaveInfo");
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const NotificationHandler = (indicator, messages, descriptions) => {
    const notificationMethods = {
      success: notification.success,
      error: notification.error,
      info: notification.info,
      warning: notification.warning,
    };
    const notify = notificationMethods[indicator] || notification.info;
    notify({
      message: messages,
      description: descriptions,
      duration: 5,
      className: "custom-toast",
    });
  };

  useEffect(() => {
    if (DateCalulations()) {
      NotificationHandler("error", "Invalid Value", "Enter Valid Dates");
      SetselectDateFrm("");
      SetselectDateTo("");
    }
  });

  const DateCalulations = () => {
    const start = new Date(selectDateFrm);
    const end = new Date(selectDateTo);
    if (end < start) {
      return false;
    }
    const diffTime = Math.abs(end - start);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays > 3;
  };

  const handleFocus = (state_type) => {
    if (state_type === "from") {
      setInputTypeFrm("date");
    } else {
      setInputTypeTo("date");
    }
  };

  const handleBlur = (state_type) => {
    if (state_type === "from") {
      setInputTypeFrm("text");
    } else {
      setInputTypeTo("text");
    }
  };

  const handleSessionsFrm = (button) => {
    setSelectedBtnFrm((prev) => (prev === button ? null : button));
  };

  const handleSessionsTo = (button) => {
    setSelectedBtnTo((prev) => (prev === button ? null : button));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBtnFrm === null || selectedBtnTo === null) {
      NotificationHandler("error", "Invalid", "Fill the Sessions");
      return;
    }
    NotificationHandler("success", "Success", "Form Submitted");
    navigateFunction(e);
  };

  const HandleTextAre = (e) => {
    const Newvalue = e.target.value;
    SetReasonValue(Newvalue);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <Typography variant="h5" className={classes.title}>
            Leave Request Form
          </Typography>
          <Box display="flex" gap="24px" flexWrap="wrap">
            <Box flex="1">
              <Typography>From</Typography>
              <TextField
                type={inputTypeFrm}
                value={selectDateFrm}
                placeholder="Enter From Date"
                onFocus={() => handleFocus("from")}
                onChange={(e) => handleValuesDate("from", e)}
                onBlur={() => handleBlur("from")}
                InputProps={{ inputProps: { min: getTodayDate() } }}
                required
                fullWidth
                className={classes.inputField}
              />
              <Box className={classes.buttonGroup}>
                <GlobalBtn
                  text="FN"
                  bg={selectedBtnFrm === "FN" ? "#0c67a3" : "#d1d5db"}
                  width="50%"
                  onClick={() => handleSessionsFrm("FN")}
                />
                <GlobalBtn
                  text="AN"
                  bg={selectedBtnFrm === "AN" ? "#0c67a3" : "#d1d5db"}
                  width="50%"
                  onClick={() => handleSessionsFrm("AN")}
                />
              </Box>
            </Box>
            <Box flex="1">
              <Typography>To</Typography>
              <TextField
                type={inputTypeTo}
                value={selectDateTo}
                placeholder="Enter To Date"
                onFocus={() => handleFocus("to")}
                onChange={(e) => handleValuesDate("to", e)}
                onBlur={() => handleBlur("to")}
                InputProps={{ inputProps: { min: selectDateFrm || getTodayDate() } }}
                required
                fullWidth
                className={classes.inputField}
              />
              <Box className={classes.buttonGroup}>
                <GlobalBtn
                  text="FN"
                  bg={selectedBtnTo === "FN" ? "#0c67a3" : "#d1d5db"}
                  width="50%"
                  onClick={() => handleSessionsTo("FN")}
                />
                <GlobalBtn
                  text="AN"
                  bg={selectedBtnTo === "AN" ? "#0c67a3" : "#d1d5db"}
                  width="50%"
                  onClick={() => handleSessionsTo("AN")}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography>Reason</Typography>
            <textarea
              className={classes.textarea}
              maxLength={200}
              rows={3}
              required
              value={ReasonValue}
              onChange={(e) => HandleTextAre(e)}
            ></textarea>
          </Box>
          <GlobalBtn text='Submit' width='100%' bg="#0c67a3" className={classes.submitButton}/>
        </form>
      </Box>
      <SideBar />
    </Box>
  );
};

export default LeaveForm;
