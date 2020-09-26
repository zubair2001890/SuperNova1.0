import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setInitialHeaderTheme,
  setScrollHeaderTheme,
} from "../../store/slices/page";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "./components/LoginForm";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 80px)",
    paddingTop: theme.spacing(30),
    margin: "auto auto",
    width: 595,
    maxHeight: 526,
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
  dispatch(setInitialHeaderTheme("black"));
  dispatch(setScrollHeaderTheme("black"));

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
        bodyChildren={<LoginForm />}
        footerChildren={
          <>
            <Button fullWidth size="large">
              <Typography variant="h5">SEND LINK</Typography>
            </Button>
          </>
        }
      />
    </Grid>
  );
}
