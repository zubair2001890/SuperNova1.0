import React from "react";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";

import LoginForm from "./components/LoginForm";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="white"
                  />
                </svg>
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
