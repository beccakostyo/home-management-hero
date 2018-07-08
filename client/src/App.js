import React, { Component } from "react";
import "./App.css";
import SigninNav from "./components/SigninNav/SigninNav";
import CopyRightFooter from './components/CopyrightFooter/CopyrightFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SigninNav />
        <CopyRightFooter/>
      </div>
    );
  }
}

export default App;
