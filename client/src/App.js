import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./Components/Layout/Navbar";
import About from "./Components/pages/About";
import Home from "./Components/pages/Home";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import ContactState from "./context/contact/ContactState";

function App() {
  return (
    <Fragment>
      <ContactState>
        <Router>
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </Fragment>
  );
}

export default App;
