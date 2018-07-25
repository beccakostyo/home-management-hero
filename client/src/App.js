import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Individual component imports //
import CopyRightFooter from './_components/CopyrightFooter/CopyrightFooter';

// Page imports //
import AboutPage from "./_components/_AboutPage";
import ContactPage from "./_components/_ContactPage";
import HelpPage from "./_components/_HelpPage";
import Home from "./_components/_HomePage";
import SigninPage from "./_components/_SigninPage";
import SignupPage from "./_components/_SignupPage";
import UserDashPage from "./_components/_UserDashPage";
import AddPropertyForm from "./_components/_AddPropertyPage";
import PropertyPage from './_components/_PropertyPage/PropertyPage';
import NoMatch from './_components/_NoMatch/NoMatch';
import EditProperty from "./_containers/EditProperty/EditProperty";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Redirect from="/" exact path to="/home" />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/about" component={ AboutPage } />
            <Route exact path="/contact" component={ ContactPage } />
            <Route exact path="/help" component={ HelpPage } />
            <Route exact path="/signin" component={ SigninPage }/>
            <Route exact path="/signup" component={ SignupPage } />
            <Route exact path="/dash" component={ UserDashPage } />
            <Route exact path="/add-property" component={ AddPropertyForm } />
            <Route exact path="/signout" component={ Home } />
            <Route exact path="/properties/show/:id" component={ PropertyPage } />
            <Route exact path="/properties/edit/:id" component={ EditProperty } />
            <Route component={ NoMatch } />
          </Switch>
          <CopyRightFooter />
        </div>
      </Router>
    );
  }
}

export default App;
