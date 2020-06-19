import React from "react";
// @material-ui/core components
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons
//import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "./Grid/GridContainer.js";
import GridItem from "./Grid/GridItem.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";
import CustomInput from "./CustomInput/CustomInput.js";
import Button from "@material-ui/core/Button";
//import CardContent from "@material-ui/core/CardContent";
import styles from "./loginStyle.js";
import theme from "./theme.js";

const useStyles = makeStyles(styles);

export default function LoginComponent() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={8}>
              <Card className={classes.root}>
                <form className={classes.form}>
                  <CardHeader
                    variant="outlined"
                    color="primary"
                    className={classes.cardHeader}
                  >
                    <Typography variant="h4" align={"center"}>
                      Login
                    </Typography>
                    <div className={classes.socialLine}>
                      <Button
                        justicon="true"
                        href="#pablo"
                        target="_blank"
                        color="secondary"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fa fab fa-twitter fa-2x"} />
                      </Button>
                      <Button
                        justicon="true"
                        href="#pablo"
                        target="_blank"
                        color="secondary"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fa fa-facebook fa-2x"} />
                      </Button>
                      <Button
                        justicon="true"
                        href="#pablo"
                        target="_blank"
                        color="secondary"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          style={{ fontSize: "32px" }}
                          className={"fab fa-google-plus-g"}
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    {/* <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    /> */}
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",

                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter>
                    <Button simple="true" color="primary" size="large">
                      Sign In
                    </Button>
                    <Button simple="true" color="primary" size="large">
                      Forgot Password
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}
