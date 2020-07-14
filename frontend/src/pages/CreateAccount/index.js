import React from "react";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import CreateAccountForm from "./components/CreateAccountForm";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    padding: theme.spacing(35, 0, 0, 0),
    margin: "auto auto",
  },
  header: {
    width: 450,
    height: 65,
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
    <Grid item xs={12} sm={10} lg={5} className={classes.container}>
      <FormCard
        headerChildren={
          <div className={classes.header}>
            <Typography noWrap variant="h4" component="h1" align="center">
              CREATE AN ACCOUNT
            </Typography>
          </div>
        }
        bodyChildren={<CreateAccountForm />}
        footerChildren={
          <>
            <Button fullWidth size="large">
              <Typography variant="h5">Create Account</Typography>
            </Button>
          </>
        }
      />
    </Grid>
  );
}
