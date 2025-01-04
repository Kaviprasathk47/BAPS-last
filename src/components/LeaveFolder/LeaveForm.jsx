import React, { useEffect, useState } from "react";
import { notification } from "antd";
import Leaveinfo from './LeaveInfo.jsx'
import { useNavigate } from "react-router-dom";
import "./LeaveForm.css";
const LeaveForm = () => {
  const [selectedBtnFrm, setSelectedBtnFrm] = useState(null);
  const [selectedBtnTo, setSelectedBtnTo] = useState(null);
  const [inputTypeFrm, setInputTypeFrm] = useState("text");
  const [inputTypeTo, setInputTypeTo] = useState("text");
  const [selectDateFrm, SetselectDateFrm] = useState();
  const [selectDateTo, SetselectDateTo] = useState();
  const[ReasonValue,SetReasonValue] = useState();
  
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
    navigate("/LeaveInfo"
    //   state: {
    //     reasonValue: {ReasonValue},
    //     datefrm:{selectDateFrm},
    //     dateto:{selectDateTo},
       
    //   },
    );
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Ensure two digits
    const day = today.getDate().toString().padStart(2, "0"); // Ensure two digits
    return `${year}-${month}-${day}`;
  };
  const NotificationHandler = (indicator, messages, descriptions) => {
    // Check the indicator type and call the respective notification method
    const notificationMethods = {
      success: notification.success,
      error: notification.error,
      info: notification.info,
      warning: notification.warning,
    };

    // Check if the indicator is valid and call the method, else default to 'info'
    const notify = notificationMethods[indicator] || notification.info;

    // Call the notification method
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

    // Check if the end date is before the start date
    if (end < start) {
      return false; // Valid if the end date is after the start date
    }

    const diffTime = Math.abs(end - start); // Time difference in milliseconds
    const diffDays = diffTime / (1000 * 60 * 60 * 24); // Convert to days

    return diffDays > 3; // Invalid if more than 3 days difference
  };
  const handleFocus = (state_type) => {
    if (state_type === "from") {
      setInputTypeFrm("date");
    } else {
      setInputTypeTo("date");
    }
  };

  const handleBlur = (state_type) => {
    if (state_type == "from") {
      setInputTypeFrm("text");
    } else {
      setInputTypeTo("text");
    }
  };

  const handleSessionsFrm = (button) => {
    if (!button) {
      NotificationHandler("error", "Invalid", "Fill the Sessions");
    } else {
      setSelectedBtnFrm(button);
    }
  };

  const handleSessionsTo = (button) => {
    setSelectedBtnTo(button);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBtnFrm === null || selectedBtnTo === null) {
      NotificationHandler("error", "Invalid", "Fill the Sessions");
      return;
   
    }
    NotificationHandler("success", "success", "Form Submitted");
    // alert(ReasonValue);
    
    navigateFunction(e);
  };

 const HandleTextAre = (e) => 
 {
  const Newvalue = e.target.value;

  SetReasonValue(Newvalue);
 }
 



  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center p-8 ">
     
      {/* Center content */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
      
        {/* Wide container */}
        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <label className="font-semibold text-center mb-6 text-2xl text-gray-600 block">
            Leave Request Form
          </label>
          <div className="lg:flex lg:space-x-6 space-y-4 lg:space-y-0 items-center justify-between">
            {/* Grouped date inputs */}
            <div className="flex flex-col w-full lg:w-1/2">
              <label className="font-semibold mb-1" htmlFor="DateFrom">
                From
              </label>
              <input
                type={inputTypeFrm}
                name="DateFrom"
                id="DateFrom"
                value={selectDateFrm}
                placeholder="Enter From Date"
                onFocus={() => handleFocus("from")}
                onChange={(e) => handleValuesDate("from", e)}
                onBlur={() => handleBlur("from")}
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-customBlue"
                required
                min={getTodayDate()}
              />
              <div className="flex space-x-2 mt-2">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 w-1/2 ${
                    selectedBtnFrm === "FN"
                      ? "bg-customBlue text-white hover:bg-HoverColor"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => handleSessionsFrm("FN")}
                >
                  FN
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 w-1/2 ${
                    selectedBtnFrm === "AN"
                      ? "bg-customBlue text-white hover:bg-HoverColor"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => handleSessionsFrm("AN")}
                  required
                >
                  AN
                </button>
              </div>
            </div>

            {/* Second column for 'To' input and buttons */}
            <div className="flex flex-col w-full lg:w-1/2">
              <label className="font-semibold mb-1" htmlFor="DateTo">
                To
              </label>
              <input
                type={inputTypeTo}
                name="DateTo"
                id="DateTo"
                value={selectDateTo}
                placeholder="Enter To Date"
                onFocus={() => handleFocus("to")}
                onChange={(e) => handleValuesDate("to", e)}
                onBlur={() => handleBlur("to")}
                className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-customBlue"
                required
                min={selectDateFrm == null ? getTodayDate() : selectDateFrm}
              />
              <div className="flex space-x-2 mt-2">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 w-1/2 ${
                    selectedBtnTo === "FN"
                      ? "bg-customBlue text-white hover:bg-HoverColor"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => handleSessionsTo("FN")}
                  required
                >
                  FN
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 w-1/2 ${
                    selectedBtnTo === "AN"
                      ? "bg-customBlue text-white hover:bg-hoverColor"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => handleSessionsTo("AN")}
                  required
                >
                  AN
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative space-y-2">
            <label className="text-gray-700 font-semibold capitalize tracking-widest p-1">
              reason
            </label>
            <textarea
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-customBlue"
              maxLength={200}
              rows={3}
              cols={10}
              required
              value={ReasonValue}
               onChange={(e)=>HandleTextAre(e)}
            ></textarea>
          </div>
          <div>
            <button className="text-white p-3 mt-4 w-full rounded-md bg-customBlue" >
              Submit
              
            </button>
           
          </div>
        </form>
      </div>
      {/* {passValue ? (
  <Leaveinfo ReasonValue={ReasonValue} passValue={passValue} />
) : (
  (() => {
    NotificationHandler("warning", "error", "Form Not Submitted");
    return null;
  })()
)} */}

    </div>
    
  );
};

export default LeaveForm;
