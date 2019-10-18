import React from 'react';
import Spinner from '../../src/elements/Spinner';

describe('<Spinner/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
});
