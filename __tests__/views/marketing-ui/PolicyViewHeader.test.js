import React from 'react';
import PolicyViewHeader from '../../../src/views/marketing-ui/PolicyViewHeader';

describe('<PolicyViewHeader/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<PolicyViewHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
