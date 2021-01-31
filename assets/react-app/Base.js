import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Mobile from "./Mobile";

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

export default class Base extends Component {
  render() {
    return detectMob() ? (
      <Mobile />
    ) : (
      <Router>
        <App />
      </Router>
    );
  }
}
