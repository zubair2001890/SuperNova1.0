import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import {
  setInitialHeaderTheme,
  setScrollHeaderTheme,
} from "../../store/slices/page";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import paths from "../../constants/paths";

import params from "../../auth0-params.json";
import { AuthContext } from "../../AuthContext";

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
  successMessage: {
    color: theme.palette.secondary.main,
    fontSize: 16,
    textAlign: "center",
    paddingBottom: theme.spacing(2),
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
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const emailRegex = new RegExp(
    /^[\w.!#$%&'*+-/=?^_`{}|]+@[\w-]{1,253}\.[a-zA-Z0-9-]{1,63}$/,
    ""
  );

  const handleSubmit = (e) => {
    if (!emailRegex.test(email)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
      e.preventDefault();
      auth.changePassword(params.realm, email, setSuccessful);
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialHeaderTheme("black"));
    dispatch(setScrollHeaderTheme("black"));
  });

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
            invalidEmail={invalidEmail}
          />
        }
        footerChildren={
          <>
            {successful && (
              <Typography className={classes.successMessage}>
                We've just sent you an email with a link to reset your password.
              </Typography>
            )}
            {successful ? (
              <Button
                component={RouterLink}
                fullWidth
                size="large"
                to={paths.login}
              >
                <Typography variant="h5">LOG IN</Typography>
              </Button>
            ) : (
              <Button fullWidth size="large" onClick={handleSubmit}>
                <Typography variant="h5">SEND LINK</Typography>
              </Button>
            )}
          </>
        }
      />
    </Grid>
  );
}
