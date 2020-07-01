import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@material-ui/core";

import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.black,
  },
  form: {
    marginTop: theme.spacing(5),
  },
  icons: {
    color: theme.palette.common.black,
    padding: theme.spacing(0),
  },
  button: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(3, 0),
  },
}));

export default () => {
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
  return (
    <>
      <Typography variant="caption" component="h1" align="center">
        New to SuperNova? Create an Account
      </Typography>

      <FormControl fullWidth className={classes.form}>
        <InputLabel className={classes.root} htmlFor="standard-adornment-email">
          Email
        </InputLabel>

        <Input
          onChange={handleChange("email")}
          id="standard-adornment-email"
          value={values.email}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton disabled edge="end">
                <EmailIcon className={classes.icons} />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl fullWidth className={classes.form}>
        <InputLabel
          className={classes.root}
          htmlFor="standard-adornment-password"
        >
          Password
        </InputLabel>

        <Input
          fullWidth
          onChange={handleChange("password")}
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          endAdornment={
            <InputAdornment>
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? (
                  <LockOpenIcon className={classes.icons} />
                ) : (
                  <LockIcon className={classes.icons} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button className={classes.button}>Forgot your password?</Button>
    </>
  );
};
