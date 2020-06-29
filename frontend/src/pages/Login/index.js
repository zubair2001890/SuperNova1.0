import React from "react";
import { Link as MaterialLink } from "@material-ui/core";
import { Link } from "react-router-dom";
import paths from "../../constants/paths";
import FormCard from "../../components/FormCard/index";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  Button,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    paddingTop: 200,
  },
}));

export default function Links() {
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
    <div className={classes.container}>
      <FormCard
        headerChildren={
          <Typography variant="h5" component="h1">
            LOGIN
          </Typography>
        }
        bodyChildren={
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
                  <AccountCircle />
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
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </>
        }
        footerChildren={
          <>
            <Button
              className={clsx(classes.margin, classes.label)}
              variant="outlined"
              size="large"
            >
              SIGN IN
            </Button>
          </>
        }
      />
    </div>
  );
}
