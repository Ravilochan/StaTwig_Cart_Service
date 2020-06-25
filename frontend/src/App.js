import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Cartlist from "./components/CartList";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <br />
          <Route exact path="/cart" component={Cartlist} />
          <Route exact path="/checkout" component={Checkout} />
        </div>
      </div>
    </Router>
  );
}

export default App;
