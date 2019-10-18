import React from 'react';
import { BuyCrypto } from '../../../src/views/marketing-ui/BuyCrypto';

describe('<BuyCrypto/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<BuyCrypto />);
    expect(wrapper).toMatchSnapshot();
  });
});
