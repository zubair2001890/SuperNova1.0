import React from "react";
import { Link as MaterialLink } from "@material-ui/core";
import { Link } from "react-router-dom";
import paths from "../../constants/paths";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LoginForm from "./components/LoginForm";
import {
  Button,
  Grid,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    padding: theme.spacing(35, 0, 0, 0),
    margin: "auto auto",
  },
  socialIcons: {
    color: "white",
  },
}));

export default function Links() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={4} className={classes.container}>
      <FormCard
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
                <LinkedInIcon className={classes.socialIcons} />
              </IconButton>
            </Grid>
          </>
        }
        bodyChildren={<LoginForm />}
        footerChildren={
          <>
            <Button fullWidth size="large">
              SIGN IN
            </Button>
          </>
        }
      />
    </Grid>
  );
}
