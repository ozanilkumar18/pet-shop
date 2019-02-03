import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { LoginLayout } from "./layouts/LoginLayout";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ marginTop:'20vh',marginBottom:'20vh' }}>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
