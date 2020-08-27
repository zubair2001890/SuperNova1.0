import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
  Typography,
  Checkbox,
} from "@material-ui/core";

import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import EmailIcon from "@material-ui/icons/Email";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.gray,
    marginLeft: theme.spacing(6),
  },
  form: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  nameInput: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(1),
    width: 360,
  },
  emailInput: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(1),
    width: 360,
  },
  passwordInput: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(1),
    width: 360,
  },
  termsAndConditionsCheckbox: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(2, 1, 0, 4),
    margin: theme.spacing(1, 0, 1, 0),
  },
  termsAndConditionsText: {
    fontSize: 15,
  },
  icons: {
    color: theme.palette.common.black,
    padding: theme.spacing(0),
  },
}));

export default () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: "",
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
      <FormControl className={classes.nameInput}>
        <InputLabel
          className={classes.root}
          htmlFor="standard-adornment-first-name"
        >
          First Name
        </InputLabel>

        <Input
          onChange={handleChange("firstName")}
          id="standard-adornment-first-name"
          type="text"
          value={values.firstName}
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

      <FormControl fullWidth className={classes.emailInput}>
        <InputLabel className={classes.root} htmlFor="standard-adornment-email">
          Email
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

      <FormControl fullWidth className={classes.passwordInput}>
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

      <FormControl
        fullWidth
        className={classes.termsAndConditionsCheckbox}
        required={true}
      >
        <FormControlLabel
          control={
            <Checkbox
              name="termsAndConditions"
              style = {{
                color: "#666666",
              }}
            />
          }
          label={<Typography className={classes.termsAndConditionsText}>I have read and understood the terms and conditions</Typography>}
        />
      </FormControl>
    </>
  );
};
