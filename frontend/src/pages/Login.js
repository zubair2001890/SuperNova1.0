import React from "react";
import { Link as MaterialLink } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import paths from "../constants/paths";
import LoginForm from "../components/LoginForm";

export default function Links() {
  return (
    <>
      <Container maxWidth={"sm"}>
        <LoginForm />
      </Container>

      <Typography>
        <MaterialLink component={RouterLink} to={paths.home}>
          Homepage
        </MaterialLink>
      </Typography>
    </>
  );
}
