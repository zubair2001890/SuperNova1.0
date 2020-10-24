import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getPictureUrl } from "../../../helpers/imageUrl";

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
    const { classes, user } = this.props;
    const fullPictureUrl = getPictureUrl(user.picture);
    return (
      <img src={fullPictureUrl} alt={user.nickname} className={classes.avatar} />
    );
  }
}

const StyledAvatar = withStyles(styles)(Avatar);

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps)(StyledAvatar);
