import auth0 from "auth0-js";

class Auth {
  accessToken;
  idToken;
  expiresAt;
  tokenRenewalTimeout;

  auth0Client = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENTID,
    redirectUri: window.location.origin,
    audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
    scope:
      "read:current_user update:current_user_metadata openid profile email",
    responseType: "token id_token",
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.getExpiration = this.getExpiration.bind(this);
  }

  login(realm, username, password, handleIncorrect) {
    //   Attempt to log the user in
    this.auth0Client.login(
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
  }

  logout() {
    //   Reset the user's session with null values
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user");
    clearTimeout(this.tokenRenewalTimeout);
    this.auth0Client.logout({ returnTo: window.location.origin });
  }

  signup(
    connection,
    username,
    email,
    password,
    handleIncorrect,
    setValidDetails
  ) {
    //   Attempt to create a new user account
    this.auth0Client.signup(
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
  }

  changePassword(connection, email, setSuccessful) {
    this.auth0Client.changePassword(
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
  }

  handleAuthentication() {
    //   Attempt to authenticate the user in the app
    this.auth0Client.parseHash({}, (err, authResult) => {
      if (err) {
        return;
      } else if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      }
    });
    // This block could be used to poll Auth0 to see if the user's session is still active
    // If it is still active, then keep the user logged in, otherwise the user logs out when refreshing the page

    // this.auth0Client.checkSession({}, (err, authResult) => {
    //   if (err) {
    //     console.log("checkSession error:");
    //     console.log(err);
    //     return;
    //   } else {
    //     console.log("handleAuthentication was successful");
    //     console.log("checkSession authResult:");
    //     console.log(authResult);
    //     this.setSession(authResult);
    //   }
    // });
  }

  getAccessToken() {
    //   Return access token
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      console.log("getAccessToken: No access token to retrieve");
      return;
    }
    return accessToken;
  }

  getIdToken() {
    //   Return JWT ID token
    const idToken = localStorage.getItem("id_token");
    if (!idToken) {
      console.log("getIdToken: No ID token to retrieve");
      return;
    }
    return idToken;
  }

  getExpiration() {
    //   Return access token expiration time
    const expiresAt = localStorage.getItem("expires_at");
    if (!expiresAt) {
      console.log("getExpiration: No expiration time to retrieve");
      return;
    }
    return expiresAt;
  }

  isAuthenticated() {
    //   Return true or false, depending whether or not the user is authenticated
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  setSession(authResult) {
    //   Use the results from handleAuthentication() to set of the user's browser session
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    this.auth0Client.client.userInfo(authResult.accessToken, (err, user) => {
      if (err) {
        console.log("setSession: Couldn't get user info");
        return;
      } else {
        localStorage.setItem("user", JSON.stringify(user));
      }
    });
  }

  getUserInfo() {
    //   Return user info if it can be obtained, otherwise return undefined
    if (!this.getAccessToken()) {
      console.log("getUserInfo: No access token set.");
      return;
    } else {
      this.auth0Client.client.userInfo(this.getAccessToken(), (err, user) => {
        if (err) {
          console.log("getUserInfo:");
          console.log(err);
          return;
        } else {
          console.log("getUserInfo:");
          console.log(user);
          localStorage.setItem("user", JSON.stringify(user));
          return user;
        }
      });
    }
  }
}

const auth = new Auth();
export default auth;
