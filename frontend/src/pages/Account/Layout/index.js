import React, { Component } from "react";
import AccountLayout from "../../../components/account/Layout";
import Nav from "./Nav";

export class Layout extends Component {
  render() {
    return (
      <AccountLayout
        Nav={Nav}
        mainTitle="My Account"
        {...this.props}
      ></AccountLayout>
    );
  }
}

export default Layout;
