import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import Faq from './pages/Faq';
import paths from './constants/paths';
import theme from './theme';
import Mission from './pages/Mission';
import Terms from './pages/Terms';
import Model from './pages/Model';
import Contact from './pages/Contact';
import Team from './pages/Team';

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
            <Route path="/mission" component={Mission} />
            <Route path="/terms" component={Terms} />
            <Route path="/model" component={Model} />
            <Route path="/contact" component={Contact} />
            <Route path="/team" component={Team} />
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
