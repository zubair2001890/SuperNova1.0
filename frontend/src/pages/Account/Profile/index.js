import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Layout from "../Layout";
import Info from "./Info/index";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Edit from "./Edit";
import Stats from "./Stats";
import { withAuth0 } from "@auth0/auth0-react";

const styles = (theme) => ({
  header: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
});

export class Profile extends Component {
  render() {
    const { classes, auth0 } = this.props;
    const { user } = auth0;
    return (
      <Layout title="About Me:">
        <div className={classes.header}>
          <Info user={user} />
          <Avatar user={user} />
        </div>
        <Bio user={user} />
        <Edit />
        <Stats />
      </Layout>
    );
  }
}

const StyledPage = withStyles(styles, { withTheme: true })(Profile);

const mapStateToProps = ({ user }) => ({ user });

const WithAuth = withAuth0(StyledPage);

export default connect(mapStateToProps)(WithAuth);
