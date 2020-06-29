import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    bacgroundColor: "white",
    border: "3px solid black",
  },
  header: {
    position: "absolute",
    top: 0,
    left: "50%",
    backgroundColor: "black",
    padding: theme.spacing(2),
    maxWidth: "80%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  body: {
    padding: theme.spacing(4, 2, 2, 2),
  },
  footer: {
    padding: theme.spacing(2),
  },
}));

export default ({
  className,
  containerClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  headerChildren,
  bodyChildren,
  footerChildren,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, className, containerClassName)}>
      <div className={clsx(classes.header, headerClassName)}>
        {headerChildren}
      </div>
      <div className={clsx(classes.body, bodyClassName)}>{bodyChildren}</div>
      <div className={clsx(classes.footer, footerClassName)}>
        {footerChildren}
      </div>
    </div>
  );
};
