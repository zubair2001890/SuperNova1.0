import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

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
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  content: {
    width: "40%",
    backgroundColor: "black",
    color: "white",
    margin: "auto auto",
    transform: "translate(0px, -30px)",
  },
  margin: {
    marginBottom: "20px",
  },

  position: {
    marginTop: "20%",
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
      <Paper
        className={classes.position}
        variant="elevation"
        square
        elevation={5}
      >
        <Paper variant="elevation" elevation={8} className={classes.content}>
          <Typography gutterBottom align="center" variant="h3">
            Login
          </Typography>

          <Grid container direction="row" justify="center" alignItems="center">
            <IconButton aria-label="settings">
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="settings">
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="settings">
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
          </Grid>
        </Paper>
        <Container>
          <TextField
            fullWidth
            className={classes.margin}
            id="input-with-icon-textfield"
            label="Email"
            InputProps={{
              endAdornment: (
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

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Button className={classes.margin} variant="outlined" size="large">
            Log In
          </Button>
          <Button className={classes.margin} variant="outlined" size="large">
            Forgot Password
          </Button>
        </Grid>
      </Paper>
    </>
  );
}
