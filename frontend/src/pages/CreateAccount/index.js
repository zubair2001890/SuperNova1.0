import React, { useState } from "react";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as GoogleLogo } from "../assets/google-plus.svg";
import CreateAccountForm from "./components/CreateAccountForm";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import paths from "../../constants/paths";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import auth0 from "auth0-js";
import params from "../../auth0-params.json";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 80px)",
    paddingTop: theme.spacing(28),
    paddingBottom: theme.spacing(2),
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
  let auth0Client = new auth0.WebAuth({
    domain: params.domain,
    clientID: params.clientId,
    audience: params.apiAudience,
    redirectUri: params.callbackUrl,
    scope: params.scope,
    responseType: "token id_token",
  });

  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [validDetails, setValidDetails] = useState(false);

  const handleIncorrect = (emailValid, passwordValid) => {
    setInvalidEmail(emailValid);
    setInvalidPassword(passwordValid);
  };

  const handleEmpty = (isEmpty) => {
    setEmptyField(isEmpty);
  };

  const handleSubmit = (e) => {
    if (!isChecked) {
      alert(
        "Please read and agree to the terms and conditions before making an account"
      );
    } else if (username === "") {
      handleEmpty(true);
    } else if (email === "") {
      handleEmpty(true);
    } else if (password === "") {
      handleEmpty(true);
    } else {
      e.preventDefault();
      handleEmpty(false);
      auth0Client.signup(
        {
          connection: params.realm,
          username: username,
          email: email,
          password: password,
        },
        (err, authResult) => {
          if (err) {
            if (typeof err.description === "string") {
              handleIncorrect(true, false);
              return;
            } else {
              handleIncorrect(false, true);
              return;
            }
          } else if (authResult) {
            console.log(authResult);
            handleIncorrect(false, false);
            setValidDetails(true);
          }
        }
      );
    }
  };

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

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
        bodyChildren={
          <CreateAccountForm
            username={username}
            email={email}
            password={password}
            onUsernameChange={(e) => setUsername(e)}
            onEmailChange={(e) => setEmail(e)}
            onPasswordChange={(e) => setPassword(e)}
            isChecked={isChecked}
            onCheckboxChange={toggleChecked}
            invalidEmail={invalidEmail}
            invalidPassword={invalidPassword}
            emptyField={emptyField}
          />
        }
        footerChildren={
          <>
            {validDetails ? (
              <Button component={RouterLink} fullWidth size="large" to={paths.login}>
                <Typography variant="h5">LOG IN</Typography>
              </Button>
            ) : (
              <Button fullWidth size="large" onClick={handleSubmit}>
                <Typography variant="h5">CREATE ACCOUNT</Typography>
              </Button>
            )}
          </>
        }
      />
    </Grid>
  );
}
