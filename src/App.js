import React from "react";
import Home from "./components/index";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import myCV from "./components/myCV";
import MyForm from "./components/myForm";
import Error from "./components/Error";
import { Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import "./components/App.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={MyForm} />
        <Route path="/cv" component={myCV} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
