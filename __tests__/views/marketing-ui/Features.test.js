import React from 'react';
import Features from '../../../src/views/marketing-ui/Features';

describe('<Features/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Features />);
    expect(wrapper).toMatchSnapshot();
  });
});
