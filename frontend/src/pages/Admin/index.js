import React, { Component, useEffect } from "react";
import Layout from "./Layout/index";
import { makeStyles } from "@material-ui/core";
import {ProjectsList} from "./components/ProjectsList"  

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
  const pendingProjects = ["This", "Is", "Some", "Test", "Data"];
  return (
    <Layout title="Admin">
      <ProjectsList pendingProjects={pendingProjects}/>
    </Layout>
  );
}



  
    
    
  