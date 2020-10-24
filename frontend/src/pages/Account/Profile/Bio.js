import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";

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
    const { classes, user } = this.props;
    return (
      <section className={classes.bio}>
        <p>Bio:</p>
        <p>{user.bio || "No biography"}</p>
      </section>
    );
  }
}

const StyledBio = withStyles(styles)(Bio);

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps)(StyledBio);
