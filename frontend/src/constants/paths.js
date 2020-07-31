import {
  getAccountUrl,
  getEditPath,
  getProjectEditPath,
} from "../helpers/createPaths";

let paths = {
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
  activity: getAccountUrl("activity"),
  overview: getEditPath(""),
  settings: getEditPath("/settings"),
  biology: "/explore/biology",
  physics: "/explore/physics",
  mathsAndStats: "/explore/mathematicsandstats",
  spaceSciences: "/explore/spacesciences",
  computerScience: "/explore/computerscience",
  earthSciences: "/explore/earthsciences",
  chemistry: "/explore/chemistry",
  medicine: "/explore/medicine",
  socialSciences: "/explore/socialsciences",
  engineeringAndTech: "/explore/engineeringandtech",
  projects: {},
};

const addProjectPath = ([key, subPath]) => {
  paths = {
    ...paths,
    projects: {
      ...paths.projects,
      [key]: {
        route: getProjectEditPath(subPath),
        createPath: (id) => getProjectEditPath(subPath, id),
      },
    },
  };
};

const addProjectPaths = () => {
  const projectPaths = {
    home: "/",
    scientists: "scientists",
    timeline: "timeline-and-budget",
    methods: "methods",
    labNotes: "lab-notes",
    about: "about",
  };
  const entries = Object.entries(projectPaths);
  entries.forEach(addProjectPath);
};

addProjectPaths();

export default paths;
