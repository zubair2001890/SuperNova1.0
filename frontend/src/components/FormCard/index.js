import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    bacgroundColor: "white",
    border: "1px solid black",
    padding: theme.spacing(4, 2, 0, 2),
  },
  loginHeader: {
    position: "absolute",
    top: 0,
    left: "50%",
    backgroundColor: "black",
    padding: theme.spacing(3, 4, 0, 4),
    width: "60%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  createAccountHeader: {
    position: "absolute",
    top: 0,
    left: "50%",
    backgroundColor: "black",
    padding: theme.spacing(5, 4, 5, 4),
    width: "70%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  body: {
    padding: theme.spacing(0, 2, 2, 2),
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
  isLogin
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, className, containerClassName)}>
      {isLogin === true ? (
        <>
          <div className={clsx(classes.loginHeader, headerClassName)}>
            {headerChildren}
          </div>
        </>
      ) : (
        <>
          <div className={clsx(classes.createAccountHeader, headerClassName)}>
            {headerChildren}
          </div>
        </>
      )}
      <div className={clsx(classes.body, bodyClassName)}>{bodyChildren}</div>
      <div className={clsx(classes.footer, footerClassName)}>
        {footerChildren}
      </div>
    </div>
  );
};
