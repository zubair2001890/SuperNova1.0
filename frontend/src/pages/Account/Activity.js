import React, { Component } from "react";
import Layout from "../../components/account/Layout";
import MainNav from "../../components/account/MainNav";

export class Activity extends Component {
  render() {
    return <Layout title="My comments:" Nav={MainNav}></Layout>;
  }
}

export default Activity;
