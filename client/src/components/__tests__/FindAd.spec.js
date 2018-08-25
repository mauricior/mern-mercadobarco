import React from 'react';
import { shallow } from 'enzyme';

import FindAd from '../FindAd';

describe('Testing FindAd Component', () => {
  it('should render correctly', () => {
    const component = shallow(<FindAd />);
    expect(component).toMatchSnapshot();
  });
});
