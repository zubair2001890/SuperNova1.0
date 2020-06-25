import React from "react";
import { Link as MaterialLink } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";
import paths from "../constants/paths";
import LoginForm from "../components/LoginForm";

export default function Links() {
  return (
    <>
      <Grid style={{ margin: "auto auto" }} item xs={12} sm={6} lg={4}>
        <LoginForm />
      </Grid>

      <Typography>
        <MaterialLink component={RouterLink} to={paths.home}>
          Homepage
        </MaterialLink>
      </Typography>
    </>
  );
}
