import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Layout from "./components/Layout";
import paths from "./constants/paths";
import theme from "./theme";
import Loading from "./pages/Loading";

const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Error404 = lazy(() => import("./pages/Error404/Error404"));
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
const Payment = lazy(() => import("./pages/Payment"));
const CheckoutForm = lazy(() =>
  import("./pages/Payment/components/CheckoutForm")
);
const Project = lazy(() => import("./pages/ProjectPage"));

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <ScrollToTop />
          <Layout>
            <Switch>
              <Route path={paths.login}>
                <Login />
              </Route>
              <Route path={paths.createAccount}>
                <CreateAccount />
              </Route>
              <Route path={paths.forgotPassword}>
                <ForgotPassword />
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
              <Route path={paths.biology} exact>
                <Biology />
              </Route>
              <Route path={paths.socialSciences} exact>
                <SocialSciences />
              </Route>
              <Route path={paths.physics} exact>
                <Physics />
              </Route>
              <Route path={paths.mathsAndStats} exact>
                <MathsAndStats />
              </Route>
              <Route path={paths.spaceSciences} exact>
                <SpaceSciences />
              </Route>
              <Route path={paths.computerScience} exact>
                <ComputerScience />
              </Route>
              <Route path={paths.engineeringAndTech} exact>
                <EngineeringAndTech />
              </Route>
              <Route path={paths.earthSciences} exact>
                <EarthSciences />
              </Route>
              <Route path={paths.chemistry} exact>
                <Chemistry />
              </Route>
              <Route path={paths.medicine} exact>
                <Medicine />
              </Route>
              <Route path={paths.explore} exact>
                <Explore />
              </Route>
              <Route path={paths.exploreSubField} exact>
                <ExploreSubField />
              </Route>
              <Route path={paths.payment}>
                <Payment />
              </Route>
              <Route path={`${paths.checkout}/:project/:option`}>
                <CheckoutForm />
              </Route>
              <Route path={`${paths.explore}/:fieldName/:subfieldName/:id`}>
                <Project />
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
