import React, { useState } from "react";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as GoogleLogo } from "../assets/google-plus.svg";
import LoginForm from "./components/LoginForm";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import auth0 from "auth0-js";
import params from "../../auth0-params.json";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 80px)",
    paddingTop: theme.spacing(32),
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
  let auth0Client = new auth0.WebAuth({
    domain: params.domain,
    clientID: params.clientId,
    audience: params.apiAudience,
    redirectUri: params.callbackUrl,
    scope: params.scope,
    responseType: "token id_token",
  });

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log("Logging in....");
    e.preventDefault();
    auth0Client.client.login(
      {
        realm: params.realm,
        username: email,
        password: password,
      },
      (err, authResult) => {
        if (err) {
          console.log("Login error");
          console.log(err);
          return;
        } else if (authResult) {
          console.log("Login success!");
          console.log(authResult);
        }
      }
    );
  };

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
