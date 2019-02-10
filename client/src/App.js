import React, { Component } from "react";
import logo from "./6IDq.gif";
import "./App.css";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
          <p>
            <code>100 Tweets</code>
          </p>
          <a
            className="App-link"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </header>
        <Navbar />
      </div>
    );
  }
}

export default App;
