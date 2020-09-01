import React, { useState } from "react";

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

const useStyles = makeStyles((theme, emptyField) => ({
  root: {
    color: theme.palette.common.gray,
    marginLeft: theme.spacing(6),
  },
  form: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  emptyFieldMessage: {
    color: theme.palette.secondary.main,
    fontSize: 16,
    paddingLeft: theme.spacing(6),
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
  nameInput: {
    marginTop: emptyField => !emptyField && theme.spacing(12),
    marginBottom: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(1),
    width: 360,
  },
  errorMessage: {
    color: theme.palette.secondary.main,
    fontSize: 16,
    paddingLeft: theme.spacing(6),
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

export default (props) => {
  const classes = useStyles(props.emptyField);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {props.emptyField && (
        <Typography className={classes.emptyFieldMessage}>
          All three fields are required.
        </Typography>
      )}
      <FormControl className={classes.nameInput}>
        <InputLabel
          className={classes.root}
          htmlFor="standard-adornment-full-name"
        >
          Full Name
        </InputLabel>

        <Input
          onChange={(e) => props.onUsernameChange(e.target.value)}
          id="standard-adornment-full-name"
          type="text"
          value={props.username}
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

      {props.invalidEmail && (
        <Typography className={classes.errorMessage}>
          Please enter a valid/new email address.
        </Typography>
      )}

      <FormControl fullWidth className={classes.emailInput}>
        <InputLabel className={classes.root} htmlFor="standard-adornment-email">
          Email
        </InputLabel>

        <Input
          onChange={(e) => props.onEmailChange(e.target.value)}
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

      {props.invalidPassword && (
        <Typography className={classes.errorMessage}>
          Password must be at least 8 characters and should contain
          alphanumerical characters.
        </Typography>
      )}

      <FormControl fullWidth className={classes.passwordInput}>
        <InputLabel
          className={classes.root}
          htmlFor="standard-adornment-password"
        >
          Password
        </InputLabel>

        <Input
          fullWidth
          onChange={(e) => props.onPasswordChange(e.target.value)}
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          value={props.password}
          endAdornment={
            <InputAdornment>
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
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
      <FormControl
        fullWidth
        className={classes.termsAndConditionsCheckbox}
        required={true}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={props.isChecked}
              onChange={props.onCheckboxChange}
              name="termsAndConditions"
              style={{
                color: "#666666",
              }}
            />
          }
          label={
            <Typography className={classes.termsAndConditionsText}>
              I have read and understood the terms and conditions
            </Typography>
          }
        />
      </FormControl>
    </>
  );
};
