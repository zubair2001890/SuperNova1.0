import React, { Component } from "react";
import { connect } from "react-redux";
import { withAuth0 } from "@auth0/auth0-react";
import { withStyles, Typography } from "@material-ui/core";

import LogIn from "../../pages/Login";
import { fetchAccount } from "../../store/account";

const styles = (theme) => {
  const layoutPaddingBottom = "11.700625rem";
  return {
    layout: {
      padding: `0 1rem ${layoutPaddingBottom} 1rem`,
      [theme.breakpoints.up("sm")]: {
        padding: `0 3rem ${layoutPaddingBottom} 3rem`,
      },
      [theme.breakpoints.up("lg")]: {
        padding: `0 7.5rem ${layoutPaddingBottom} 7.5rem`,
      },
    },
    container: {
      marginTop: "7rem",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
      [theme.breakpoints.up("md")]: {
        justifyContent: "start",
      },
    },
    content: {
      [theme.breakpoints.up("sm")]: {
        padding: "0 5.125rem",
      },
    },
    title: {
      font: "Bold 40px/49px Montserrat",
      letterSpacing: "3.6px",
      textTransform: "uppercase",
      marginTop: "140px",
    },
  };
};

class EditLayout extends Component {
  renderPageTitle = () => {
    const { title, customClasses } = this.props;
    return (
      title && (
        <Typography variant="h2" className={customClasses.subtitle}>
          {title}
        </Typography>
      )
    );
  };

  getContentClasses = () => {
    const { customClasses, classes } = this.props;
    return `${customClasses.content} ${classes.content}`;
  };

  render() {
    const { children, classes, auth0, Nav, mainTitle, account } = this.props;
    if (!auth0.isAuthenticated || !account) return <LogIn />;
    return (
      <div className={classes.layout}>
        <Typography variant="h1" className={classes.title}>
          {mainTitle}
        </Typography>
        <div className={classes.container}>
          <Nav />
          <div className={this.getContentClasses()}>
            {this.renderPageTitle()}
            {children}
          </div>
        </div>
      </div>
    );
  }
}

const StyledPage = withStyles(styles, { withTheme: true })(EditLayout);

const WithAuthentication = withAuth0(StyledPage);

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps, { fetchAccount })(WithAuthentication);
