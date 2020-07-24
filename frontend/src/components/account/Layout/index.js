import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles, Typography } from "@material-ui/core";
import { withAuth0 } from "@auth0/auth0-react";

import LogIn from "../../../pages/Login";
import { fetchProjects } from "../../../store/slices/projects";

const styles = (theme) => ({
  layout: {
    padding: "0 1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "0 7.5rem",
    },
  },
  container: {
    marginTop: "7rem",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  content: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      padding: "0 5.125rem",
    },
  },
  title: {
    font: "Bold 40px/49px Montserrat",
    letterSpacing: "3.6px",
    textTransform: "uppercase",
    marginTop: "140px",
  },
  subtitle: {
    font: "Bold 24px/29px Montserrat",
    letterSpacing: "1.44px",
    color: "#161515",
    marginBottom: "3.3125rem",
  },
});

export class Layout extends Component {
  fetchProjects = () => {
    const { projects, fetchProjects } = this.props;
    if (!projects.data.length) fetchProjects();
  };

  componentDidMount() {
    this.fetchProjects();
  }

  renderPageTitle = () => {
    const { title, classes } = this.props;
    return (
      title && (
        <Typography variant="h2" className={classes.subtitle}>
          {title}
        </Typography>
      )
    );
  };

  render() {
    const { children, classes, auth0, Nav } = this.props;
    if (!auth0.isAuthenticated) return <LogIn />;
    return (
      <div className={classes.layout}>
        <Typography variant="h1" className={classes.title}>
          My Account
        </Typography>
        <div className={classes.container}>
          <Nav />
          <div className={classes.content}>
            {this.renderPageTitle()}
            {children}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => ({ projects });

const StyledPage = withStyles(styles, { withTheme: true })(Layout);

const WithAuthentication = withAuth0(StyledPage);

export default connect(mapStateToProps, { fetchProjects })(WithAuthentication);
