import { createTheme } from "@mui/material";
import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
const lightTheme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
    boxshadows:{
      bs1: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    },

    borderRadius:{
      primary:'4px',
    },

    backgroundcolors:{
      primary:'#ffffff',
      trans:'rgba(0, 0, 0, 0)',
    },

    button:{
      primary:'#5A6ACF',
      border:{
        primary:'#DDE4F0',
      },
    },

    hover:{
      primary:'#f5f5f5',
    },
    bars:{
      primary:'#5A6ACF',
      secondary:'#E6E8EC',
    },
    text:{
      color:{
        primary:'#1F384C',
        secondary:'#353448',
      },

      fw:{
        primary:'500',
        sixh:'600',
      },
      size:'1.3rem',

      view:{
        primary:'#6956E5',
      },
    },

    cursor:{
      pointer:'pointer',
    },




















    palette: {
      text: {
        primary: "#353448",
        secondary: "#71707E",
        disabled: "#B9B9B9",
        Fonts:'1.3rem',
      },
      primary: {
        main: "#665CD7",
        light: "#948DE3",
        contrastText: "rgba(256,256,256)",
      },
      secondary: {
        main: "#49C792",
        light: "#CEF3E4",
        contrastText: "rgba(0,0,0,0.87)",
        containedHover: "#6CDBAD",
        outlinedHover: "#EEFBF6",
        disable: "#B9B9B9",
        textColor: "#FFFFFF",
      },
      error: {
        main: "#F44F5A",
      },
      success: {
        main: "#49C792", 
      },
    },
    
  });
  
  export default lightTheme;