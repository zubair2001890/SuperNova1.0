import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
  },
  mockAppBarLayout: {
    ...theme.mixins.appBar,
  },
}));

export default ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.mockAppBarLayout}></div>
        {children}
      </div>
      <Footer />
    </>
  );
};
