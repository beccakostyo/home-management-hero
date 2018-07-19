import React, { Component } from 'react';
import axios from 'axios';
import SignupNav from "../Navs/SignupNav"
import { Card, Row, Input, Button } from 'react-materialize';

class SigninPage extends Component {
  state = {
    username: "",
    password: "",
  };

  updateUser (userObject) {
    this.setState(userObject)
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    axios.post('/api/signin', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.updateUser({
            loggedIn: true,
            username: response.data.username
          })
          this.props.history.push("/dash")
        }
      })
        .catch(error => {
          console.log(`Login error: ${error}`)
        })
  };
  render() {
    return (
      <div className="root">
      <SignupNav />
      <div className="container">
        <Card>
          <h1 style={{color:'black'}}>Sign In!</h1>
          <Row>
            <Input 
              s={6}
              type="text"
              name="username"
              label="Username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <Input
              s={6}
              type="password"
              name="password"
              label="password"
              value={this.state.Password} 
              onChange={this.handleInputChange}
            />
          </Row>
          <Button
            type="submit"
            onClick={this.handleFormSubmit}>
            submit
          </Button>
          <br/><br/>
          <p className="flow-text">Don't have a login yet? <a href="/signup">Click here </a>to create one.</p>
          </Card>
      </div>
    </div>
    )
  }
  
}

export default SigninPage;