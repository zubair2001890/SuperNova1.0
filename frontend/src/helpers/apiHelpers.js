export const getDataSync = function (url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);// False meaning not asynchronous.
    request.send(null);
    if (request.status !== 200) {
        console.log(request.status);
    }
    else {
        return JSON.parse(request.responseText);
    }
}

export const getSubfields = function (subfieldName) {
    let subfields = getDataSync(process.env.REACT_APP_BACKEND_URL + "/api/public/subfield/" + subfieldName);
  let subfieldNames = [];
  for (let index = 0; index < subfields.length; index++)
  {
    subfieldNames.push(subfields[index].subfieldName.toUpperCase());
  }
  return subfieldNames;
}

export const getPendingProjects = function() {
  return getDataSync(process.env.REACT_APP_BACKEND_URL + "/api/public/getpendingprojects");
}

export const getUserObject = function(email) {
  return getDataSync(process.env.REACT_APP_BACKEND_URL + "/api/public/profile/getprofilebyemail/" + email);
}

export const getResponseFromProjectDeletion = function(projectID) {
  return getDataSync(process.env.REACT_APP_BACKEND_URL + "/api/public/deleteprojectbyadmin/" + projectID);
}

export const getResponseFromProjectApproval = function(projectID) {
  return getDataSync(process.env.REACT_APP_BACKEND_URL + "/api/public/updateprojectstatus/" + projectID);
}
