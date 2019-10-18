import React from 'react';
import About from '../../../src/views/marketing-ui/About';

describe('<About/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
