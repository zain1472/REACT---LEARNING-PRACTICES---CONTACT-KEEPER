import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./Components/Layout/Navbar";
import Alert from "./Components/Layout/Alert";
import About from "./Components/pages/About";
import Home from "./Components/pages/Home";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
// States
import ContactState from "./context/contact/ContactState";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
// utils
import setAuthToken from "./utils/setAuthToken";
// PrivateRoute
import PrivateRoute from "./routing/PrivateRoute";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Fragment>
      <ContactState>
        <AlertState>
          <AuthState>
            <Router>
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Router>
          </AuthState>
        </AlertState>
      </ContactState>
    </Fragment>
  );
}

export default App;
