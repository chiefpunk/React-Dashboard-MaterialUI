import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import StartPage from "./StartPage";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" component={StartPage}></Route>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </div>
  );
};

export default App;
