import React from 'react';
import AccountBalanceContainer from '../../../../src/views/trade-ui/containers/AccountBalanceContainer';

describe('<AccountBalanceContainer/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<AccountBalanceContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
