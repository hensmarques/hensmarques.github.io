import React from 'react';
import Footer from '../../../src/views/marketing-ui/Footer';

describe('<Footer/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
