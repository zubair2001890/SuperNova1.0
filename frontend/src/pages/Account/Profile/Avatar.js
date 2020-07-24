import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  avatar: {
    borderRadius: "50%",
    width: "9rem",
    height: "9rem",
    marginLeft: "2rem",
  },
};

export class Avatar extends Component {
  render() {
    const {
      classes,
      user: { picture, given_name },
    } = this.props;
    return <img src={picture} alt={given_name} className={classes.avatar} />;
  }
}

export default withStyles(styles)(Avatar);
