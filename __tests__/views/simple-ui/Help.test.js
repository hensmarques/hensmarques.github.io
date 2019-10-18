import React from 'react';
import Help from '../../../src/views/simple-ui/Help';

describe('<Help/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Help />);
    expect(wrapper).toMatchSnapshot();
  });
});
