import React, { Component } from "react";
import "./App.css";
import SigninNav from "./components/SigninNav/SigninNav";
import CopyRightFooter from './components/CopyrightFooter/CopyrightFooter';
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <CopyRightFooter/>
      </div>
    );
  }
}

export default App;
