import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { LoginLayout } from "./layouts/LoginLayout";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Header />
        <LoginLayout />
      </div>
    );
  }
}

export default App;
