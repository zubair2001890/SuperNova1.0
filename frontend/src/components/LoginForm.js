import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActions,
  CardHeader,
  Button,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxWidth: "100%",
    padding: "50px",
    alignContent: "center",
    zIndex: -1,
  },

  content: {
    position: "relative",
    marginTop: "30%",
    height: "70px",
    width: "40%",
    backgroundColor: "black",
    color: "white",
    margin: "auto auto",
    transform: "translate(0px, 40px)",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "24px",
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  return (
    <>
      <CardHeader
        className={classes.content}
        title="Login"
        action={
          <CardActions>
            <IconButton aria-label="settings">
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="settings">
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="settings">
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
          </CardActions>
        }
      ></CardHeader>
      <Card className={classes.root}>
        <InputLabel>Email</InputLabel>
        <Input fullWidth={true} />
        <InputLabel>Password</InputLabel>
        <Input fullWidth={true} />

        <CardActions>
          <Button size="large">Log In</Button>
          <Button size="large">Forgot Password</Button>
        </CardActions>
      </Card>
    </>
  );
}
