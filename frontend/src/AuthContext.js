import React, { createContext, useState } from "react";
import auth0 from "auth0-js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [arrived, setArrived] = useState(false);

  let auth0Client = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENTID,
    redirectUri: window.location.origin,
    audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
    scope:
      "read:current_user update:current_user_metadata openid profile email",
    responseType: "token id_token",
  });

  const login = (realm, username, password, handleIncorrect) => {
    //   Attempt to log the user in
    auth0Client.login(
      {
        realm: realm,
        username: username,
        password: password,
      },
      (err, authResult) => {
        if (err) {
          handleIncorrect(true);
          return;
        } else {
          handleIncorrect(false);
        }
      }
    );
  };

  const logout = () => {
    //   Reset the user's session with null values
    // this.accessToken = null;
    // this.idToken = null;
    // this.expiresAt = 0;
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user");
    auth0Client.logout({ returnTo: window.location.origin });
  };

  const signup = (
    connection,
    username,
    email,
    password,
    handleIncorrect,
    setValidDetails
  ) => {
    //   Attempt to create a new user account
    auth0Client.signup(
      {
        connection: connection,
        username: username,
        email: email,
        password: password,
      },
      (err, authResult) => {
        if (err) {
          if (typeof err.description === "string") {
            handleIncorrect(true, false);
            return;
          } else {
            handleIncorrect(false, true);
            return;
          }
        } else {
          handleIncorrect(false, false);
          setValidDetails(true);
        }
      }
    );
  };

  const changePassword = (connection, email, setSuccessful) => {
    // Send the user an email via which they can reset their password
    auth0Client.changePassword(
      {
        connection: connection,
        email: email,
      },
      (err, authResult) => {
        if (err) {
          return;
        } else {
          setSuccessful(true);
        }
      }
    );
  };

  const handleAuthentication = () => {
    //   Attempt to authenticate the user in the app
    auth0Client.parseHash({}, (err, authResult) => {
      if (err) {
        return;
      } else if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult);
      }
    });
  };

  const setSession = (authResult) => {
    //   Use the results from handleAuthentication() to set up the user's browser session
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    // this.accessToken = authResult.accessToken;
    // this.idToken = authResult.idToken;
    // this.expiresAt = expiresAt;
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    auth0Client.client.userInfo(authResult.accessToken, (err, user) => {
      if (err) {
        console.log("setSession: Couldn't get user info");
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(user));
        setArrived(true);
      }
    });
  };

  const isAuthenticated = () => {
    //   Return true or false, depending whether or not the user is authenticated
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };

  const getAccessToken = () => {
    //   Return access token
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      console.log("getAccessToken: No access token to retrieve");
      return;
    }
    return accessToken;
  };

  const getIdToken = () => {
    //   Return JWT ID token
    const idToken = localStorage.getItem("id_token");
    if (!idToken) {
      console.log("getIdToken: No ID token to retrieve");
      return;
    }
    return idToken;
  };

  const getExpiration = () => {
    //   Return access token expiration time
    const expiresAt = localStorage.getItem("expires_at");
    if (!expiresAt) {
      console.log("getExpiration: No expiration time to retrieve");
      return;
    }
    return expiresAt;
  };

  const getUserInfo = () => {
    //   Return user info
    const user = localStorage.getItem("user");
    if (!user) {
      console.log("getUserInfo: No user info to retrieve");
      return;
    }
    return JSON.parse(user);
  };

    return (
      <AuthContext.Provider
        value={{
          arrived,
          login,
          logout,
          signup,
          changePassword,
          handleAuthentication,
          setSession,
          isAuthenticated,
          getAccessToken,
          getIdToken,
          getExpiration,
          getUserInfo,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
};
