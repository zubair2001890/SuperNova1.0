import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import PictureForm from "../../../../components/PictureForm";
import { ProjectContext } from "../../Layout";
import { icon, iconOffset } from "../../../../styles/form";
import { postUpdateProject } from "../../../../store/slices/middlewareAPI/fetchAPI";

export class Form extends Component {
  static contextType = ProjectContext;

  getProjectId = () => {
    return this.props.match.params.id;
  };

  updateProjectImage = (key, token) => {
    const projectId = this.getProjectId();
    return postUpdateProject({ projectImage: key }, token, projectId);
  };

  useImage = async (key, token) => {
    await this.updateProjectImage(key, token);
    await this.context.fetchAndSetProject();
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
