import React, { useState } from "react";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import { Button, Grid, Typography } from "@material-ui/core";

import auth0 from "auth0-js";
import params from "../../auth0-params.json";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 80px)",
    paddingTop: theme.spacing(30),
    paddingBottom: theme.spacing(2),
    margin: "auto auto",
    width: 595,
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

  const handleSubmit = (e) => {
    console.log("Sending reset email....");
      e.preventDefault();
      auth0Client.changePassword(
        {
          connection: params.realm,
          email: email,
        },
        (err, authResult) => {
          if (err) {
            console.log("Reset password error");
            console.log(err);
            return;
          } else if (authResult) {
            console.log("Reset password success!");
            console.log(authResult);
          }
        }
      );
  };

  return (
    <Grid item className={classes.container}>
      <FormCard
        loginType="forgotpassword"
        headerChildren={
          <>
            <Typography variant="h4" component="h1" align="center">
              FORGOT PASSWORD
            </Typography>
          </>
        }
        bodyChildren={
          <ForgotPasswordForm
            email={email}
            onEmailChange={(e) => setEmail(e)}
          />
        }
        footerChildren={
          <>
            <Button fullWidth size="large" onClick={handleSubmit}>
              <Typography variant="h5">SEND LINK</Typography>
            </Button>
          </>
        }
      />
    </Grid>
  );
}
