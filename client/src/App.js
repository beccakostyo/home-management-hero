import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Individual component imports //
import CopyRightFooter from './components/CopyrightFooter/CopyrightFooter';

// Page imports //
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import UserDash from "./pages/UserDash";
import AddPropertyForm from "./pages/AddPropertyPage";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Redirect from="/" exact path to="/home" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact path="/signin" component={SigninPage}/>
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/dash" component={UserDash} />
            <Route exact path="/add-property" component={AddPropertyForm} />
            <Route exact path="/signout" component={Home} />
          </Switch>
          <CopyRightFooter />
        </div>
      </Router>
    );
  }
}

export default App;
