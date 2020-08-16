import EditLayout from "../../EditLayout";
import { withAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchAccount } from "../../../store/account";

export class Layout extends Component {
  fetchAccountIfEmpty = async () => {
    const { fetchAccount, account, auth0 } = this.props;
    const { user } = auth0;
    if (!account && user) fetchAccount(user.sub);
  };

  componentDidMount() {
    this.fetchAccountIfEmpty();
  }

  render() {
    return <EditLayout {...this.props}></EditLayout>;
  }
}

const WithAuthentication = withAuth0(Layout);

const mapStateToProps = ({ allProjects }) => ({ projects: allProjects });

export default connect(mapStateToProps, { fetchAccount })(WithAuthentication);
