import React from "react";
import { makeStyles } from "@material-ui/core";
import Layout from "../Layout";
import Form from "./Form";
import AvatarForm from "./AvatarForm/index";

const useStyles = makeStyles((theme) => ({
  overview: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "start",
    },
  },
}));

export default function Overview() {
  const classes = useStyles();
  return (
    <Layout title="Overview">
      <div className={classes.overview}>
        <Form />
        <AvatarForm />
      </div>
    </Layout>
  );
}
