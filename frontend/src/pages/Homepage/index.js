import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  setDarkTheme as setPageDarkTheme,
  setParticles as setPageParticles,
} from "../../store/slices/page";
import Intro from "./components/Intro";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: theme.palette.common.black,
  },
  title: {
    fontFamily: "avaMeridian",
    textAlign: "center",
    letterSpacing: 10,
    color: theme.palette.common.white,
  },
}));

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(setPageDarkTheme(true));
    dispatch(setPageParticles(true));
    return () => {
      dispatch(setPageDarkTheme(false));
      dispatch(setPageParticles(false));
    };
  }, [dispatch]);

  return (
    <div className={classes.pageContainer}>
      <Intro />
    </div>
  );
};
