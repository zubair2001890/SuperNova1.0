/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link as MaterialLink } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import paths from "../constants/paths";

export default function Links() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Homepage
      </Typography>
      <Typography>
        <MaterialLink component={Link} to={paths.login}>
          Log In
        </MaterialLink>
      </Typography>
    </>
  );
}
