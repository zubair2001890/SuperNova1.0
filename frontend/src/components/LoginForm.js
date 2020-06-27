import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormCard from "./FormCard";
import {
  Button,
  Container,
  Grid,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
  Paper,
  Typography,
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "20px 0px 20px 0px",
  },
  textField: {
    color: theme.palette.common.black,
  },
  iconsColor: {
    color: theme.palette.common.white,
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    email: "",
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
  const header = () => (
    <>
      <Typography gutterBottom align="center" variant="h3">
        Login
      </Typography>
      <Grid container direction="row" justify="center">
        <IconButton aria-label="settings">
          <FacebookIcon className={classes.iconsColor} />
        </IconButton>
        <IconButton aria-label="settings">
          <TwitterIcon className={classes.iconsColor} />
        </IconButton>
        <IconButton aria-label="settings">
          <LinkedInIcon className={classes.iconsColor} />
        </IconButton>
      </Grid>
    </>
  );

  const body = () => (
    <Container>
      <FormControl
        margin="normal"
        fullWidth={true}
        className={clsx(classes.textField)}
      >
        <InputLabel
          className={clsx(classes.textField)}
          htmlFor="standard-adornment-email"
        >
          Email
        </InputLabel>
        <Input
          id="standard-adornment-email"
          value={values.email}
          onChange={handleChange("email")}
          endAdornment={
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl
        margin="normal"
        fullWidth={true}
        className={classes.textField}
      >
        <InputLabel
          className={classes.textField}
          htmlFor="standard-adornment-password"
        >
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
    </Container>
  );

  const footer = () => (
    <>
      <Button
        className={clsx(classes.margin, classes.label)}
        variant="outlined"
        size="large"
      >
        Log In
      </Button>
      <Button className={classes.margin} variant="outlined" size="large">
        Forgot Password
      </Button>
    </>
  );

  return (
    <>
      <FormCard head={header()} body={body()} footer={footer()} />
    </>
  );
}
