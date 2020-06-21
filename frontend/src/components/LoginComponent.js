import React from "react";
// @material-ui/core components
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// core components
import GridContainer from "./Grid/GridContainer.js";

import theme from "./theme.js";

export default function LoginComponent() {
  const section = {
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    // backgroundImage: "url(" + image + ")",
  };
  const conatiner = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={section}>
        <div style={conatiner}>
          <GridContainer justify="center">
            <Typography variant="h1" gutterBottom>
              LOGIN
            </Typography>
          </GridContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}
