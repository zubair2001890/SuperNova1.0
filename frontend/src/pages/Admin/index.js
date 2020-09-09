import React, { Component } from "react";
import Layout from "./Layout/index";
import { makeStyles } from "@material-ui/core";
import { fetchPendingProjects, fetchFeaturedProject } from "../../store/slices/middlewareAPI/middlewareAPI";
import { useAuth0 } from "@auth0/auth0-react";
//import { getPendingProjects } from "./adminHelpers";
import { useDispatch, useSelector } from "react-redux";
import {unwrapResult} from '@reduxjs/toolkit';
import { getFeaturedProjects } from "./adminHelpers";

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

export default function Admin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let featuredProjects = null;
  console.log(getFeaturedProjects(dispatch).length);
  
  //dispatch(fetchFeaturedProject()).then(unwrapResult).then(data => (populateUI(data)));
  
  //dispatch(fetchPendingProjects()).then(unwrapResult).then(data => console.log({data}));
  return (
    <Layout title="Admin">
      <div id="pendingProjects"> 
        </div>
    </Layout>
  );
}

function populateUI(classes, projectsArray)
{
  document.getElementById("pendingProjects").innerText = projectsArray.toString();
}
  
    
    
  