import { join } from "path";

export const getAccountUrl = (subPath) => `/account/${subPath}`;

export const getProjectPath = (projectId) =>
  join("/projects/", projectId.toString());

export const getEditPath = (subPath) => {
  const editPath = getAccountUrl("edit");
  return join(editPath, subPath);
};