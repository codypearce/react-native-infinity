import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

const root = document.getElementById("app");

const renderApp = () => {
  const App = require("../src/App").default;
  if (root) render(<App />, root);
};

renderApp();

if (module && module.hot != null && typeof module.hot.accept === "function") {
  module.hot.accept(["../src/App"], () =>
    setImmediate(() => {
      unmountComponentAtNode(root);
      renderApp();
    })
  );
}
