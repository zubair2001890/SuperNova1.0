import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setInitialHeaderTheme,
  setScrollHeaderTheme,
} from "../../store/slices/page";
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
    paddingTop: theme.spacing(32),
    margin: "auto auto",
    width: 436,
    maxHeight: 472,
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialHeaderTheme("black"));
    dispatch(setScrollHeaderTheme("black"));
  });

  return (
    <Grid item className={classes.container}>
      <FormCard
        loginType="login"
        headerChildren={
          <>
            <Typography variant="h4" component="h1" align="center">
              LOGIN
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
              <Typography variant="h5">SIGN IN</Typography>
            </Button>
          </>
        }
      />
    </Grid>
  );
}
