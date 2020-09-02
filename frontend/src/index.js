import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from "./serviceWorker";
import auth0 from "auth0-js";
import params from "./auth0-params.json";

export const auth0Client = new auth0.WebAuth({
  domain: params.domain,
  clientID: params.clientId,
  audience: params.apiAudience,
  redirectUri: params.callbackUrl,
  scope: params.scope,
  responseType: "token id_token",
});

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENTID}
    redirectUri={window.location.origin}
    audience={`https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`}
    scope="read:current_user"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
