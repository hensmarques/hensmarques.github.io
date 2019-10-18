import React from 'react';
import { createMockStore } from 'redux-test-utils';
import RecentTrades from '../../../src/views/trade-ui/RecentTrades';
import types from '../../../src/actions/types';

const mockState = {
  trades: [
    {
      action: 'trade',
      level: null,
      timestamp: null,
      side: 'buy',
      exchange_id: 'SSHIFTFX',
      number_of_orders: 0,
      quantity: '0.002',
      price: '10152.24',
    },
    {
      action: 'trade',
      level: null,
      timestamp: null,
      side: 'sell',
      exchange_id: 'SSHIFTFX',
      number_of_orders: 0,
      quantity: '0.009',
      price: '10260',
    },
  ],
  selectedInstrument: { id: 'BTCUSD' },
};

describe('<RecentTrades/>', () => {
  const store = createMockStore(mockState);
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithStore(<RecentTrades />, store);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('dispatches loadData on mount', () => {
    expect(store.isActionTypeDispatched(types.app.loadOrderEvents)).toBe(true);
  });

  it('renders the header and the recent trades rows', () => {
    expect(
      wrapper.containsMatchingElement(
        <div className="recent-trades-header">
          <span className="recent-trades-price">Price</span>
          <span className="recent-trades-size">Size</span>
        </div>,
      ),
    ).toBe(true);

    expect(wrapper.find('.recent-trades-row').length).toBe(mockState.trades.length);
    expect(wrapper.find('.recent-trades-row.buy').length).toBe(1);
    expect(wrapper.find('.recent-trades-row.sell').length).toBe(1);

    mockState.trades.forEach((trade) => {
      expect(
        wrapper.containsAllMatchingElements([
          <span className="recent-trades-price">{trade.price}</span>,
          <span className="recent-trades-size">{trade.quantity}</span>,
        ]),
      ).toBe(true);
    });
  });
});
