const fetchPost = async (path, data, authToken) => {
  let headers = {
    "Content-Type": "application/json",
  };

  if (authToken) {
    Object.assign(headers, { Authorization: `Bearer ${authToken}` });
  }

  const response = await fetch(path, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: headers,
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

const fetchPut = async (path, data, authToken) => {
  let headers = {
    "Content-Type": "application/json",
  };

  if (authToken) {
    Object.assign(headers, { Authorization: `Bearer ${authToken}` });
  }

  const response = await fetch(path, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: headers,
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

const fetchGet = async (path, authToken) => {
  let headers = {
    "Content-Type": "application/json",
  };

  if (authToken) {
    Object.assign(headers, { Authorization: `Bearer ${authToken}` });
  }

  const response = await fetch(path, {
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: headers,
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

const addUrlParameters = (path, parameters) => {
  for (let parameter in parameters) {
    const seperator = path.indexOf("?") !== path.length - 1 ? "?" : "&";
    const value = parameters[parameter];

    if (value) {
      path += `${seperator}${parameter}=${value}`;
    }

    return path;
  }
};

export const getFeaturedProject = async () =>
  await fetchGet(`${process.env.REACT_APP_BACKEND_URL}/api/public/featured`);

export const getSubFields = async (fieldname) =>
  await fetchGet(
    `${process.env.REACT_APP_BACKEND_URL}/api/public/featured/${fieldname}`
  );

export const getProjects = async (parameters) =>
  await fetchGet(
    addUrlParameters(
      `${process.env.REACT_APP_BACKEND_URL}/api/public/project`,
      parameters
    )
  );

export const getProjectDetails = async (projectID) =>
  await fetchGet(
    `${process.env.REACT_APP_BACKEND_URL}/api/public/project/${projectID}`
  );

export const getProfile = async (profileSub) =>
  await fetchGet(
    `${process.env.REACT_APP_BACKEND_URL}/api/public/profile/${profileSub}`
  );

export const postUpdateAccount = async (data, authToken) =>
  await fetchPost(
    `${process.env.REACT_APP_BACKEND_URL}/api/private/updateaccount`,
    data,
    authToken
  );

export const putCreateProject = async (data, authToken) =>
  await fetchPut(
    `${process.env.REACT_APP_BACKEND_URL}/api/private/createproject`,
    data,
    authToken
  );

export const postUpdateProject = async (data, authToken, projectID) =>
  await fetchPost(
    `${process.env.REACT_APP_BACKEND_URL}/api/private/updateproject/${projectID}`,
    data,
    authToken
  );

export const postSendPayment = async (data, authToken) =>
  await fetchPost(
    `${process.env.REACT_APP_BACKEND_URL}/api/private/payment`,
    data,
    authToken
  );
