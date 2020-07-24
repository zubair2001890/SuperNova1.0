import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  bio: {
    margin: "3.75rem 0",
    fontFamily: "AvertaDemo, sans-serif",
    fontSize: "1.125rem",
    letterSpacing: "1.08px",
  },
};

export class Bio extends Component {
  render() {
    const { user, classes } = this.props;
    return (
      <section className={classes.bio}>
        <p>Bio:</p>
        <p>{user.bio || "No biography"}</p>
      </section>
    );
  }
}

export default withStyles(styles)(Bio);
