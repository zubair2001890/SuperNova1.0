import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import LoginIncorrect from "./pages/LoginIncorrect";
import Error404 from "./pages/Error404";
import Faq from "./pages/Faq";
import paths from "./constants/paths";
import theme from "./theme";
import Mission from "./pages/Mission";
import Terms from "./pages/Terms";
import Model from "./pages/Model";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import TopicX from "./pages/TopicX";
import Explore from "./pages/Explore";
import Biology from "./pages/Biology";
import SocialSciences from "./pages/SocialSciences";
import Physics from "./pages/Physics";
import MathsAndStats from "./pages/MathsAndStats";
import SpaceSciences from "./pages/SpaceSciences";
import ComputerScience from "./pages/ComputerScience";
import EngineeringAndTech from "./pages/EngineeringAndTech";
import EarthSciences from "./pages/EarthSciences";
import Chemistry from "./pages/Chemistry";
import Medicine from "./pages/Medicine";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Switch>
            <Route path={paths.login}>
              <Login />
            </Route>
            <Route path={paths.loginIncorrect}>
              <LoginIncorrect />
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
            <Route path={paths.error404}>
              <Error404 />
            </Route>
            <Redirect to={paths.error404} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
