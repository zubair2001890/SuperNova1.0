import React, { Component, useEffect } from "react";
import Layout from "./Layout/index";
import { makeStyles } from "@material-ui/core";
import {ProjectsList} from "./components/ProjectsList";  
import {PendingProjectsForm} from "./components/PendingProjectsForm";
import {getPendingProjects} from "../../helpers/apiHelpers"
import {getUserObject} from "../../helpers/apiHelpers"
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "0.625rem",
    padding: "0.625rem 3.25rem",
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: "white",
    textTransform: "uppercase",
    marginLeft: "0 rem",
    background: "#000000 0% 0% no-repeat padding-box",
    borderRadius: "0.5rem",
    display: "block",
    border: 0,
    cursor: "pointer",
  },
}));

export default () => {
  const classes = useStyles();
  const { loginWithRedirect, isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0();
  if (isAuthenticated){
    console.log(user);
    let userObject = getUserObject(user.email);
    if (!userObject.isAdmin) {
      throw new Error("You are not an authorised admin user, you should not be viewing this page.");
    }
  }

  return (
    <Layout title="Admin">
      <h1>Pending projects:</h1>
      <ProjectsList pendingProjects={getPendingProjects()}/>
      <PendingProjectsForm approveOrDelete = "Approve" classes = {classes}></PendingProjectsForm>
      <PendingProjectsForm approveOrDelete = "Delete" classes = {classes}></PendingProjectsForm>
    </Layout>
    
  );
}