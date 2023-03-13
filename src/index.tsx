import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: orange[500],
          color: "white",
          "&:hover": {
            backgroundColor: orange[800],
          }
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
