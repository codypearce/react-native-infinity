import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </div>
    </Router>
  );
}

export default AppRouter;
