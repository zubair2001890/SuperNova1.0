import React, { Suspense, Component, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { withAuth0 } from "@auth0/auth0-react";

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
const MyProjects = lazy(() => import("./pages/Account/MyProjects"));
const BackedProjects = lazy(() => import("./pages/Account/BackedProjects"));
const Profile = lazy(() => import("./pages/Account/Profile"));
const Activity = lazy(() => import("./pages/Account/Activity"));
const Overview = lazy(() => import("./pages/editAccount/Overview"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

class App extends Component {
  // async componentDidMount() {
  //   const { getAccessTokenSilently } = this.props.auth0;
  //   const token = await getAccessTokenSilently();
  //   console.log("token", token);
  // }

  render() {
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
                <Route path={paths.overview}>
                  <Overview />
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
}

export default withAuth0(App);
