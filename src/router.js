import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import Home from "./routes/home";

export default function RouterConfig() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  );
}
