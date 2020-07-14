import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Checkbox,
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
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.black,
  },
  form: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  icons: {
    color: theme.palette.common.black,
    padding: theme.spacing(1),
  },
  button: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(3, 0),
  },
}));

export default () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
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
      <FormControl fullWidth className={classes.form}>
        <InputLabel className={classes.root} htmlFor="standard-adornment-name">
          First Name...
        </InputLabel>

        <Input
          onChange={handleChange("name")}
          id="standard-adornment-name"
          type="text"
          value={values.email}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton disabled edge="end">
                <PeopleIcon className={classes.icons} />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl fullWidth className={classes.form}>
        <InputLabel className={classes.root} htmlFor="standard-adornment-email">
          Email...
        </InputLabel>

        <Input
          onChange={handleChange("email")}
          id="standard-adornment-email"
          type="email"
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
      <Checkbox className={classes.icons} />
      <Button className={classes.button}>
        I have read and understand the terms and conditions.
      </Button>
    </>
  );
};
