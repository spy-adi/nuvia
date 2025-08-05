// src/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import Home from "./components/Home";
import Career from "./components/Career";
import CareerDetail from "./components/CareerDetail";
import GlowJournal from "./components/GlowJournal";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/career" component={Career} />
        <Route path="/career/:id" component={CareerDetail} />
        <Route path="/glow-journal" component={GlowJournal} />
      </Switch>
    </Router>
  );
};

export default App;
