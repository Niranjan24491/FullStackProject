import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";

const Routes = props => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  </HashRouter>
);

export default Routes;
