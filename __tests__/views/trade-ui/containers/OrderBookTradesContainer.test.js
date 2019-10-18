import React from 'react';
import OrderBookTradesContainer from '../../../../src/views/trade-ui/containers/OrderBookTradesContainer';

describe('<OrderBookTradesContainer/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<OrderBookTradesContainer />);
    expect(wrapper.state().classNames).toEqual(['order-book', 'recent-trades']);
    expect(wrapper.state().tabs).toEqual(['Order Book', 'Recent Trades']);
    expect(wrapper).toMatchSnapshot();
  });
});
