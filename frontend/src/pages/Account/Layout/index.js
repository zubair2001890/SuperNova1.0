import React, { Component } from "react";
import AccountLayout from "../../../components/account/Layout";
import Nav from "./Nav";
import { subtitle } from "../../../styles/form";
import { withStyles } from "@material-ui/core";

export class Layout extends Component {
  render() {
    const { classes, ...other } = this.props;
    return (
      <AccountLayout
        Nav={Nav}
        mainTitle="My Account"
        customClasses={classes}
        {...other}
      ></AccountLayout>
    );
  }
}

const styles = {
  subtitle: { ...subtitle, letterSpacing: "1.44px" },
};

export default withStyles(styles)(Layout);
