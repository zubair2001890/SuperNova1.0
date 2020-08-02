import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import BaseAvatarForm from "../../../../components/AvatarForm";
import { ProjectContext } from "../../Layout";
import { icon, iconOffset } from "../../../../styles/form";

export class AvatarForm extends Component {
  static contextType = ProjectContext;

  handleChange = () => {};

  render() {
    const { classes } = this.props;
    if (this.context) {
      return (
        <BaseAvatarForm
          defaultPicture={this.context.projectImage}
          handleChange={this.handleChange}
          variant="square"
          pictureClass={classes.picture}
          iconClass={classes.icon}
        />
      );
    }
    return null;
  }
}

const iconAtEdgePosition = `calc( -1 * ${iconOffset} )`;

const styles = {
  picture: {
    width: "100%",
    height: "11.8125rem",
  },
  icon: {
    ...icon,
    right: iconAtEdgePosition,
    bottom: iconAtEdgePosition,
  },
};

export default withStyles(styles)(AvatarForm);
