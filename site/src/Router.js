import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Interactive from "./Pages/Interactive";
import Header from "./Components/Header";

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/interactive" exact component={Interactive} />
      </div>
    </Router>
  );
}

export default AppRouter;
