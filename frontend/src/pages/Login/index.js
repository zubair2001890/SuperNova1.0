import React, { useEffect, useState, useContext } from "react";
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

import params from "../../auth0-params.json";
import { AuthContext } from "../../AuthContext";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 80px)",
    paddingTop: theme.spacing(32),
    paddingBottom: theme.spacing(2),
    margin: "auto auto",
    width: 436,
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
  const auth = useContext(AuthContext);
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrect, setIncorrect] = useState(false);

  const handleIncorrect = (isInvalid) => {
    setIncorrect(isInvalid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(params.realm, email, password, handleIncorrect);
  };
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
        bodyChildren={
          <LoginForm
            email={email}
            password={password}
            onEmailChange={(e) => setEmail(e)}
            onPasswordChange={(e) => setPassword(e)}
            incorrectDetails={incorrect}
          />
        }
        footerChildren={
          <>
            <Button fullWidth size="large" onClick={handleSubmit}>
              <Typography variant="h5">SIGN IN</Typography>
            </Button>
          </>
        }
      />
    </Grid>
  );
}
