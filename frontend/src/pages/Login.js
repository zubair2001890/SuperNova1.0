import React from "react";
import { Link as MaterialLink } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import paths from "../constants/paths";
import LoginForm from "../components/LoginForm";
import theme from "../theme";

export default function Links() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          style={{ margin: "auto auto" }}
          item
          xs={12}
          sm={6}
          lg={4}
        >
          <LoginForm />
        </Grid>
      </ThemeProvider>

      <Typography>
        <MaterialLink component={RouterLink} to={paths.home}>
          Homepage
        </MaterialLink>
      </Typography>
    </>
  );
}
