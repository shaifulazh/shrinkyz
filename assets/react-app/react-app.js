import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Base from "./Base";

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
