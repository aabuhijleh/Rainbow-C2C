import React from "react";
import ReactDOM from "react-dom";
import { App } from "App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "@fontsource/roboto";

const theme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
