import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import Faq from "./pages/Faq";
import paths from "./constants/paths";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
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
            <Route path={paths.home} exact>
              <Homepage />
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
