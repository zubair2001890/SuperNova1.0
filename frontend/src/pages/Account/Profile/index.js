import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Layout from "../Layout";
import Info from "./Info/index";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Edit from "./Edit";
import Stats from "./Stats";
import { AuthContext } from "../../../AuthContext";

const styles = (theme) => ({
  header: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
});

export class Profile extends Component {
  static contextType = AuthContext;
  render() {
    const auth = this.context;
    const { classes } = this.props;
    const user = auth.getUserInfo();
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

export default connect(mapStateToProps)(StyledPage);
