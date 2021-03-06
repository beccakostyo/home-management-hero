import React, { Component }   from 'react';
import { withRouter}          from 'react-router-dom';
import axios                  from 'axios';
import { Row, Input, Button } from 'react-materialize';

class SignupForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
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

    axios.post('/api/users', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(response)
        if (response.data) {
          console.log(`Successful signup!`)
          this.props.history.push('/dash')
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
      <div className='root'>
        <Row>
          <Input
            s={6}
            type='text'
            name='firstName'
            label='First Name'
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <Input
            s={6}
            type='text'
            name='lastName'
            label='Last Name'
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <Input
            s={6}
            type='text'
            name='username'
            label='Username'
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <Input
            s={6}
            type='password'
            name='password'
            label='Password'
            value={this.state.Password}
            onChange={this.handleInputChange}
          />
        </Row>
        <Button
          type='submit'
          onClick={this.handleFormSubmit}>
          submit
        </Button>
      </div>
    )
  }
}

export default withRouter(SignupForm);