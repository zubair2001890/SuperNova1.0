import { join } from "path";

export const getAccountUrl = (subPath) => `/account/${subPath}`;

export const getProjectPath = (projectId) =>
  join("/projects/", projectId.toString());
<<<<<<< HEAD

export const getEditPath = (subPath) => {
  const editPath = getAccountUrl("edit");
  return join(editPath, subPath);
};
=======
>>>>>>> ccbf5ffce662cdf806fd924dcfc1f90c6587b09f
