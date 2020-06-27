import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    minWidth: "300px",
    minHeight: "100px",
    zIndex: "30",
    position: "relative",
  },
  header: {
    fontFamily: theme.typography.h3,
    backgroundColor: theme.palette.common.black,
    width: "45%",
    color: theme.palette.common.white,
    margin: "auto auto",
    padding: "5px",
    transform: "translate(0px, -30px)",
    minWidth: "10px",
    minHeight: "10px",
    zIndex: "30",
    position: "relative",
  },
  footer: {
    minWidth: "10px",
    minHeight: "10px",
  },
}));

export default function FormCard(props) {
  const classes = useStyles();

  return (
    <>
      <Paper
        className={classes.container}
        variant="elevation"
        square
        elevation={5}
      >
        <Paper variant="elevation" elevation={8} className={classes.header}>
          {props.head}
        </Paper>

        <Container> {props.body}</Container>

        <Grid
          className={classes.footer}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {props.footer}
        </Grid>
      </Paper>
    </>
  );
}
