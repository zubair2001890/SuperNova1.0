import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Item from "./Item";

const styles = (theme) => ({
  info: {
    fontFamily: "Montserrat",
    fontSize: "1.25rem",
    letterSpacing: "1.8px",
    fontWeight: 600,
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      marginBottom: "0",
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: "2rem",
      borderRight: "2px solid black",
    },
  },
});

export class Info extends Component {
  render() {
    const { classes, user, account } = this.props;
    const { given_name, family_name } = user;
    const { university = "None", field_name = "None" } = account;
    return (
      <div className={classes.info}>
        <Item>
          {given_name} {family_name}
        </Item>
        <Item>University: {university}</Item>
        <Item>Field: {field_name}</Item>
      </div>
    );
  }
}

const StyledInfo = withStyles(styles, { withTheme: true })(Info);

const mapStateToProps = ({ account }) => ({ account });

export default connect(mapStateToProps)(StyledInfo);
