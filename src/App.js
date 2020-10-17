import React from "react";
import { data } from "./data";
import Left from "./Left";
import Right from "./Right";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h5 className="logo-heading">Logo</h5>

        <ul className="header-menu-list">
          <li>Home</li>
          <li>My Portolio</li>

          <li>Clients</li>

          <li>Get In Touch</li>
        </ul>
      </div>

      <div className="components-container">
        <Left data={data} />
        <Right />
      </div>
    </div>
  );
}

export default App;
