import React from "react";
export const ProjectsList = ({pendingProjects}) => {
    return <div>{pendingProjects.map(project => 
    <div>Project ID:{(project._id)}<br></br>{project.projectDescription.aims}<br></br>{project.projectDescription.context}
    <br></br>{project.projectDescription.whyIsItImportant}<br></br><br></br></div>)
    }</div>;
}


        

