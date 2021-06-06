import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Order from "./components/Order/Order";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/store">
          <Store></Store>
        </Route>
        <Route path="/orders/:id">
          <Order></Order>
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
