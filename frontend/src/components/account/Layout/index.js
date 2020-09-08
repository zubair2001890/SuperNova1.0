import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles, Typography } from "@material-ui/core";
import auth from "../../../Auth";

import LogIn from "../../../pages/Login";
import { fetchAccount } from "../../../store/account";

const styles = (theme) => ({
  layout: {
    padding: "0 1rem 2rem 1rem",
    [theme.breakpoints.up("sm")]: {
      padding: "0 3rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 7.5rem 2rem 7.5rem",
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
  fetchAccountIfEmpty = async () => {
    const { fetchAccount, account } = this.props;
    const user = auth.getUserInfo();
    if (!account && user) fetchAccount(user.sub);
  };

  componentDidMount() {
    this.fetchAccountIfEmpty();
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
    const { children, classes, Nav, mainTitle, account } = this.props;
    if (!auth.isAuthenticated() || !account) return <LogIn />;
    return (
      <div className={classes.layout}>
        <Typography variant="h1" className={classes.title}>
          {mainTitle}
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

const StyledPage = withStyles(styles, { withTheme: true })(Layout);

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps, { fetchAccount })(StyledPage);
