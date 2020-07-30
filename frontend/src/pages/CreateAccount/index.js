import React from "react";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as GoogleLogo } from "../assets/google-plus.svg";
import LoginForm from "./components/LoginForm";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 80px)",
    paddingTop: theme.spacing(25),
    margin: "auto auto",
    width: 736,
    maxHeight: 630,
  },
  socialIcons: {
    color: "white",
  },
  button: {
    color: theme.palette.black,

    padding: theme.spacing(3, 0),
  },
}));

export default function Links() {
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <FormCard
      isLogin={false}
        headerChildren={
          <>
            <Typography variant="h4" component="h1" align="center">
              CREATE AN ACCOUNT
            </Typography>
          </>
        }
        bodyChildren={<LoginForm />}
        footerChildren={
          <>
            <Button fullWidth size="large">
              <Typography variant="h5">CREATE ACCOUNT</Typography>
            </Button>
          </>
        }
      />
    </Grid>
  );
}
