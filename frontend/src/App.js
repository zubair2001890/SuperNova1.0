import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "./components/Layout";
import paths from "./constants/paths";
import theme from "./theme";

const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const Error404 = lazy(() => import("./pages/Error404"));
const Faq = lazy(() => import("./pages/Faq"));
const Mission = lazy(() => import("./pages/Mission"));
const Terms = lazy(() => import("./pages/Terms"));
const Model = lazy(() => import("./pages/Model"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const TopicX = lazy(() => import("./pages/TopicX"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

const MyProjects = lazy(() => import("./pages/Account/MyProjects"));
const BackedProjects = lazy(() => import("./pages/Account/BackedProjects"));
const Profile = lazy(() => import("./pages/Account/Profile"));
const Activity = lazy(() => import("./pages/Account/Activity"));
const Overview = lazy(() => import("./pages/editAccount/Overview"));
const AccountSettings = lazy(() => import("./pages/editAccount/Settings"));

const Explore = lazy(() => import("./pages/Explore"));
const Biology = lazy(() => import("./pages/Biology"));
const SocialSciences = lazy(() => import("./pages/SocialSciences"));
const Physics = lazy(() => import("./pages/Physics"));
const MathsAndStats = lazy(() => import("./pages/MathsAndStats"));
const SpaceSciences = lazy(() => import("./pages/SpaceSciences"));
const ComputerScience = lazy(() => import("./pages/ComputerScience"));
const EngineeringAndTech = lazy(() => import("./pages/EngineeringAndTech"));
const EarthSciences = lazy(() => import("./pages/EarthSciences"));
const Chemistry = lazy(() => import("./pages/Chemistry"));
const Medicine = lazy(() => import("./pages/Medicine"));
const ExploreSubField = lazy(() => import("./pages/ExploreSubField"));

const EditProjectOverview = lazy(() => import("./pages/editProject/Overview"));
const AboutProject = lazy(() => import("./pages/editProject/About"));
const EditProjectTeam = lazy(() => import("./pages/editProject/Team"));
const EditProjectTimeline = lazy(() => import("./pages/editProject/Timeline"));
const EditProjectMethods = lazy(() => import("./pages/editProject/Methods"));
const EditProjectLabNotes = lazy(() => import("./pages/editProject/LabNotes"));

export default function App() {
  const { projects } = paths;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <ScrollToTop />
          <Layout>
            <Switch>
              <Route path={paths.login}>
                <Login />
              </Route>
              <Route path={paths.faq}>
                <Faq />
              </Route>
              <Route path={paths.mission}>
                <Mission />
              </Route>
              <Route path={paths.terms}>
                <Terms />
              </Route>
              <Route path={paths.model}>
                <Model />
              </Route>
              <Route path={paths.contact}>
                <Contact />
              </Route>
              <Route path={paths.team}>
                <Team />
              </Route>
              <Route path={paths.informationPageX}>
                <TopicX />
              </Route>
              <Route path={paths.home} exact>
                <Homepage />
              </Route>
              <Route path={paths.account} exact>
                <BackedProjects />
              </Route>
              <Route path={paths.myProjects}>
                <MyProjects />
              </Route>
              <Route path={paths.profile}>
                <Profile />
              </Route>
              <Route path={paths.activity}>
                <Activity />
              </Route>
              <Route path={paths.overview} exact>
                <Overview />
              </Route>
              <Route path={paths.settings}>
                <AccountSettings />
              </Route>
              <Route path={paths.biology}>
                <Biology />
              </Route>
              <Route path={paths.socialSciences}>
                <SocialSciences />
              </Route>
              <Route path={paths.physics}>
                <Physics />
              </Route>
              <Route path={paths.mathsAndStats}>
                <MathsAndStats />
              </Route>
              <Route path={paths.spaceSciences}>
                <SpaceSciences />
              </Route>
              <Route path={paths.computerScience}>
                <ComputerScience />
              </Route>
              <Route path={paths.engineeringAndTech}>
                <EngineeringAndTech />
              </Route>
              <Route path={paths.earthSciences}>
                <EarthSciences />
              </Route>
              <Route path={paths.chemistry}>
                <Chemistry />
              </Route>
              <Route path={paths.medicine}>
                <Medicine />
              </Route>
              <Route path={paths.home} exact>
                <Homepage />
              </Route>
              <Route path={paths.explore} exact>
                <Explore />
              </Route>
              <Route path={paths.exploreSubField}>
                <ExploreSubField />
              </Route>
              <Route path={projects.home.route} exact>
                <EditProjectOverview />
              </Route>
              <Route path={projects.about.route}>
                <AboutProject />
              </Route>
              <Route path={projects.team.route}>
                <EditProjectTeam />
              </Route>
              <Route path={projects.timeline.route}>
                <EditProjectTimeline />
              </Route>
              <Route path={projects.methods.route}>
                <EditProjectMethods />
              </Route>
              <Route path={projects.labNotes.route}>
                <EditProjectLabNotes />
              </Route>
              <Route path={paths.error404}>
                <Error404 />
              </Route>
              <Redirect to={paths.error404} />
            </Switch>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
