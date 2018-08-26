import React from 'react';
import { shallow, mount } from 'enzyme';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Signup from '../Signup';

describe('Testing Signup Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Signup />);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render firstName label', () => {
    expect(wrapper.find(Label).filterWhere((item) => {
      return item.prop('for') === 'firstName';
    })).toHaveLength(1);
  });

  it('should render firstName input', () => {
    expect(wrapper.find(Input).filterWhere((item) => {
      return item.prop('id') == 'firstName';
    })).toHaveLength(1);
  });

  it('should render lastName label', () => {
    expect(wrapper.find(Label).filterWhere((item) => {
      return item.prop('for') === 'lastName';
    })).toHaveLength(1);
  });

  it('should render lastName input', () => {
    expect(wrapper.find(Input).filterWhere((item) => {
      return item.prop('id') == 'lastName';
    })).toHaveLength(1);
  });

  it('should render email label', () => {
    expect(wrapper.find(Label).filterWhere((item) => {
      return item.prop('for') === 'email';
    })).toHaveLength(1);
  });

  it('should render email input', () => {
    expect(wrapper.find(Input).filterWhere((item) => {
      return item.prop('id') == 'email';
    })).toHaveLength(1);
  });

  it('should render password label', () => {
    expect(wrapper.find(Label).filterWhere((item) => {
      return item.prop('for') === 'password';
    })).toHaveLength(1);
  });

  it('should render password input', () => {
    expect(wrapper.find(Input).filterWhere((item) => {
      return item.prop('id') == 'password';
    })).toHaveLength(1);
  });

  it('should render submit button', () => {
    expect(wrapper.find(Button).at(0).text()).toEqual("Submit");
  });
});
