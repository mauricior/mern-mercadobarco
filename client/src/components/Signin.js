import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signin extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="firstName">Username</Label>
          <Input type="text" name="name" id="username" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Password</Label>
          <Input type="password" name="password" id="password" />
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
    );
  }
}

export default Signin;
