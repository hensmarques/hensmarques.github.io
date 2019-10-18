import React from 'react';
import OrderEntryContainer from '../../../../src/views/trade-ui/containers/OrderEntryContainer';

describe('<OrderEntryContainer/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<OrderEntryContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
