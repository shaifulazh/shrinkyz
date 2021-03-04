import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MemoryRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Router initialEntries={['/admin']}>
    <App />
  </Router>,
  document.getElementById("root")
);

