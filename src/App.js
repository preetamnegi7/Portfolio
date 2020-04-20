import React from "react";
import Home from "./components/index";
import { CssBaseline } from "@material-ui/core";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import { Route } from "react-router-dom";
import Contacts from "./components/Contacts";
import "./components/App.css";
import mySkills from "./components/mySkills";

const App = () => {
  return (
    <>
      <CssBaseline />
      <mySkills />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
};

export default App;
