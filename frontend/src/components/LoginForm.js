import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import {
  Container,
  Button,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
  Paper,
  Typography,
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
    width: "40%",
    backgroundColor: "black",
    color: "white",
    margin: "auto auto",
    transform: "translate(0px, -30px)",
    flexDirection: "column",
    alignContent: "center",
    zIndex: 3,
  },
  margin: {
    margin: "20px 2px",
  },

  pos: {
    marginTop: "25%",
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
      <Paper className={classes.pos} variant="outlined" square elevation={3}>
        <Paper className={classes.content}>
          <Typography variant="h3">Login</Typography>
          <IconButton aria-label="settings">
            <FacebookIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton aria-label="settings">
            <FacebookIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton aria-label="settings">
            <FacebookIcon style={{ color: "white" }} />
          </IconButton>
        </Paper>
        <Container>
          <TextField
            fullWidth
            className={classes.margin}
            id="input-with-icon-textfield"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
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
        </Container>

        <Container>
          <Button size="large">Log In</Button>
          <Button size="large">Forgot Password</Button>
        </Container>
      </Paper>
    </>
  );
}
