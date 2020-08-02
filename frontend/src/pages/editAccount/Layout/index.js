import React from "react";
import AccountLayout from "../../../components/account/Layout";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core";
import { subtitle } from "../../../styles/form";

const useStyles = makeStyles({
  subtitle: {
    ...subtitle,
    letterSpacing: "3.6px",
  },
});

export default function Layout(props) {
  const classes = useStyles();
  return (
    <AccountLayout
      mainTitle="Edit Profile"
      Nav={Nav}
      customClasses={classes}
      {...props}
    ></AccountLayout>
  );
}
