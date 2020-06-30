import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import {
  Button,
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
  textField: {
    color: "black",
    margin: theme.spacing(2, 2, 2, 2),
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
      <InputLabel
        className={classes.textField}
        htmlFor="standard-adornment-email"
      >
        Email
      </InputLabel>
      <Input
        onChange={handleChange("email")}
        id="standard-adornment-email"
        value={values.email}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton disabled>
              <EmailIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <InputLabel
        className={classes.textField}
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
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <LockOpenIcon /> : <LockIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button color="secondary">Forgot your password</Button>
    </>
  );
};
