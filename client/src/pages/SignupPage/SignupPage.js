import React, { Component } from 'react';
import axios from 'axios';
import SigninNav from "../../components/SigninNav/SigninNav"
import { Card, Row, Input, Button } from 'react-materialize';

class SignupPage extends Component {
  state = {
    username: "",
    password: "",
  };

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
    
    axios.post('/api/user', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(response)
        if (response.data) {
          console.log(`Successful signup!`)
          this.setState({
            redirectTo: '/dash'
          })
        } else {
          console.log('Sign-up error')
        }
      })
        .catch(error => {
          console.log(`Sign up server error: ${error}`)
        })
  };
  render() {
    return (
      <div className="root">
      <SigninNav />
      <div className="container">
        <Card>
          <h1 style={{color:'black'}}>Sign up!</h1>
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
          <p className="flow-text">Already have a login? <a href="/signin">Click here </a>to sign in.</p>
          </Card>
      </div>
    </div>
    )
  }
  
}

export default SignupPage;