import React from 'react';
import { shallow } from 'enzyme';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import FindAd from '../FindAd';

describe('Testing FindAd Component', () => {
  it('should render correctly', () => {
    const component = shallow(<FindAd />);
    expect(component).toMatchSnapshot();
  });
});
