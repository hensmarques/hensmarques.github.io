import React from 'react';
import RecentTradesContainer from '../../../../src/views/trade-ui/containers/RecentTradesContainer';

describe('<RecentTradesContainer/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<RecentTradesContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
