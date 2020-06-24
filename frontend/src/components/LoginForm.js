import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import {
  Card,
  CardActions,
  CardHeader,
  Button,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxWidth: "100%",
    padding: "50px",
    alignContent: "center",
    flexDirection: "columns",
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
    zIndex: 3,
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
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
        <TextField
          fullWidth
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <FormControl
          fullWidth={true}
          className={clsx(classes.margin, classes.textField)}
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <CardActions>
          <Button size="large">Log In</Button>
          <Button size="large">Forgot Password</Button>
        </CardActions>
      </Card>
    </>
  );
}
