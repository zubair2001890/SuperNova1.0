import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import { selectDarkTheme } from "../store/slices/header";

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
  const headerDarkTheme = useSelector(selectDarkTheme);

  return (
    <>
      <Header darkTheme={headerDarkTheme} />
      <div className={classes.mainContainer}>
        <div className={classes.mockAppBarLayout}></div>
        {children}
      </div>
      <Footer />
    </>
  );
};
