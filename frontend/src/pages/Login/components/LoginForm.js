import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import paths from "../../../constants/paths";

import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";

import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.gray,
    paddingLeft: theme.spacing(1),
  },
  form: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    color: theme.palette.common.black,
  },
  emailInput: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  passwordInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  icons: {
    color: theme.palette.common.black,
    padding: theme.spacing(0),
  },
  forgotPasswordButton: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(1, 1, 1, 1),
    margin: theme.spacing(1, 0, 1, 0),
  },
}));

export default (props) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <MaterialLink component={RouterLink} to={paths.createAccount}>
        <Typography
          className={classes.form}
          variant="subtitle2"
          component="h1"
          align="center"
        >
          New to SuperNova? Create an Account
        </Typography>
      </MaterialLink>

      <FormControl fullWidth className={classes.emailInput}>
        <InputLabel className={classes.root} htmlFor="standard-adornment-email">
          Email
        </InputLabel>

        <Input
          onChange={e => props.onEmailChange(e.target.value)}
          id="standard-adornment-email"
          type="email"
          value={props.email}
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
          onChange={e => props.onPasswordChange(e.target.value)}
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          value={props.password}
          endAdornment={
            <InputAdornment>
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? (
                  <LockOpenIcon className={classes.icons} />
                ) : (
                  <LockIcon className={classes.icons} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button component={RouterLink} className={classes.forgotPasswordButton} to={paths.forgotPassword}>
        Forgot your password?
      </Button>
    </>
  );
};
