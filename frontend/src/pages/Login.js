import React from "react";
import { Link as MaterialLink } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import paths from "../constants/paths";
import LoginComponent from "../components/LoginComponent";

export default function Links() {
  return (
    <>
      <LoginComponent></LoginComponent>
      <Typography>
        <MaterialLink component={Link} to={paths.home}>
          Homepage
        </MaterialLink>
      </Typography>
    </>
  );
}
