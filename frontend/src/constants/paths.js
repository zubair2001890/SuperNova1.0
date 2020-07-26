<<<<<<< HEAD
import { getAccountUrl, getEditPath } from "../helpers/createPaths";
=======
import { getAccountUrl } from "../helpers/createPaths";
>>>>>>> ccbf5ffce662cdf806fd924dcfc1f90c6587b09f

export default {
  login: "/login",
  logout: "/logout",
  error404: "/not-found",
  home: "/",
  explore: "/explore",
  faq: "/faq",
  mission: "/ourmission",
  terms: "/termsandconditions",
  model: "/ourmodel",
  contact: "/contactus",
  team: "/ourteam",
  informationPageX: "/topicx",
  account: getAccountUrl(""),
  myProjects: getAccountUrl("my-projects"),
  profile: getAccountUrl("profile"),
<<<<<<< HEAD
  activity: getAccountUrl("activity"),
  overview: getEditPath(""),
  settings: getEditPath("/settings"),
=======
  activity: getAccountUrl("activity")
>>>>>>> ccbf5ffce662cdf806fd924dcfc1f90c6587b09f
};
