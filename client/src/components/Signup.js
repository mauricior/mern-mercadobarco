import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Signup extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="name" id="firstName" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="name" id="lastName" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Signup;
