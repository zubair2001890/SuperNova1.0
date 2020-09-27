import React, { Component, useEffect } from "react";
import Layout from "./Layout/index";
import { makeStyles } from "@material-ui/core";
import { fetchPendingProjects} from "../../store/slices/middlewareAPI/middlewareAPI";
import { useDispatch, useSelector } from "react-redux";
import {selectData as selectPendingProjectsData} from "../../store/slices/pendingProjects"  

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
  const pendingProjects = [];
  return (
    <Layout title="Admin">
      <ProjectsList pendingProjects={pendingProjects}/>
    </Layout>
  );
}



  
    
    
  