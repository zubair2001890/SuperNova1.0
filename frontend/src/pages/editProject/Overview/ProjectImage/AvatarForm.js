import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import PictureForm from "../../../../components/PictureForm";
import { ProjectContext } from "../../Layout";
import { icon, iconOffset } from "../../../../styles/form";

export class Form extends Component {
  static contextType = ProjectContext;

  updateProjectImage = (key) => {
    return this.context.updateProject({ projectImage: key });
  };

  useImage = async (key, token) => {
    await this.updateProjectImage(key, token);
  };

  render() {
    const { classes } = this.props;
    if (!this.context) return null;
    return (
      <PictureForm
        useImage={this.useImage}
        imageKey={this.context.projectImage}
        variant="square"
        pictureClass={classes.picture}
        iconClass={classes.icon}
      />
    );
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

const StyledForm = withStyles(styles)(Form);

export default withRouter(StyledForm);
