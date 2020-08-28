import React from "react";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as GoogleLogo } from "../assets/google-plus.svg";
import LoginForm from "./components/CreateAccountForm";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 80px)",
    paddingTop: theme.spacing(28),
    margin: "auto auto",
    width: 520,
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
      loginType="createaccount"
        headerChildren={
          <>
            <Typography variant="h4" component="h1" align="center">
              CREATE AN ACCOUNT
            </Typography>
            <Grid container wrap="nowrap" direction="row" justify="center">
              <IconButton aria-label="settings">
                <FacebookIcon className={classes.socialIcons} />
              </IconButton>
              <IconButton aria-label="settings">
                <TwitterIcon className={classes.socialIcons} />
              </IconButton>
              <IconButton aria-label="settings">
                <GoogleLogo />
              </IconButton>
            </Grid>
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
