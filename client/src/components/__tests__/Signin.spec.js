import React from 'react';
import { shallow, mount } from 'enzyme';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Signin from '../Signin';

describe('Testing Signin Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Signin />);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render username label', () => {
    expect(wrapper.find(Label).filterWhere((item) => {
      return item.prop('for') === 'username';
    })).toHaveLength(1);
  });

  it('should render username input', () => {
    expect(wrapper.find(Input).filterWhere((item) => {
      return item.prop('id') == 'username';
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

});
