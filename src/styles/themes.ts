import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB2E86",
    },
    secondary: {
      main: "#101750",
    },
    tertiary: {
      main: "#7E33E0",
    },
    default: {
      main: "#000000",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#101750",
      secondary: "#8A8FB9",
    },
  },
  typography: {
    fontFamily: "Josefin Sans, Arial",
    h6: {
      fontSize: "20px", // Adjusted font size
      fontWeight: 600, // Adjusted font weight
      lineHeight: "28px", // Adjusted line height
      color: "#101750", // Adjusted color
    },
    body1: {
      fontFamily: "Lato, Arial",
      fontSize: "14px",
      color: "#8A8FB9",
    },
  },
  shape: {
    borderRadius: 8,
  },

