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
        <div style={{ height: "calc(100vh - 56px)", paddingTop: 56 }}>
          <Route path="/" exact component={Home} />
          <Route path="/interactive" exact component={Interactive} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
