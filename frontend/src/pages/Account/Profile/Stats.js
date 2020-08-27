import React, { Component } from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = {
  stats: {
    margin: "3.125rem 0",
  },
  title: {
    font: "Bold 24px/29px Montserrat",
    letterSpacing: "2.16px",
  },
};

export class Stats extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section className={classes.stats}>
        <Typography variant="h3" className={classes.title}>
          My Stats:
        </Typography>
      </section>
    );
  }
}

export default withStyles(styles)(Stats);
