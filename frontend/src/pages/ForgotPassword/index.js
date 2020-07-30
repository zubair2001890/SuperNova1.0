import React from "react";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "./components/LoginForm";
import { Button, Grid, Typography } from "@material-ui/core";

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
