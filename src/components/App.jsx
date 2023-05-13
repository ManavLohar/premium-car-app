import React, { Component } from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Popular from "../components/Popular/Popular";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Popular />
    </div>
  );
}

export default App;
