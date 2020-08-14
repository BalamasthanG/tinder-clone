import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <h1>On building</h1>
            <TinderCards />
          </Route>
          <Route path="/chat">
            <h2>Chat</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
