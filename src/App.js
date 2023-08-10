import React from "react";
// eslint-disable-next-line import/no-unresolved
import logo from "assets/logo.png";

import Button from "./components/Button";

import "./App.scss";

function App() {
  return (
    <div className="introduction">
      <header>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Schedule</li>
          <li>Contact us</li>
        </ul>
        <Button className="check-status-btn" title="Check Status" type="button" />
      </header>
    </div>
  );
}

export default App;
