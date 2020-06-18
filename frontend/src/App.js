import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import paths from "./constants/paths";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={paths.login}>
          <Login />
        </Route>
        <Route path={paths.home} exact>
          <Homepage />
        </Route>
        <Route path={paths.error404}>
          <Error404 />
        </Route>
        <Redirect to={paths.error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
