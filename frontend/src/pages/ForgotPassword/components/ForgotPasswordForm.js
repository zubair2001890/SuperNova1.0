import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  FormControl,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@material-ui/core";

import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.gray,
    marginLeft: theme.spacing(8),
  },
  form: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  emailInput: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(1),
    width: 400,
  },
  description: {
    marginTop: theme.spacing(18),
    marginBottom: theme.spacing(2),
    fontFamily: "Montserrat",
    fontWeight: 600,
    letterSpacing: 1.2,
    width: "95%",
    margin: "auto",
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

  return (
    <>
      <Typography
        component="h1"
        align="center"
        className={classes.description}
      >
        Please enter the registered email address to receive a reset link
      </Typography>

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
    </>
  );
};