import React from 'react';
import { createMockStore } from 'redux-test-utils';
import OrderBook from '../../../src/views/trade-ui/OrderBook';
import types from '../../../src/actions/types';

const mockState = {
  selectedInstrument: {
    id: 'BTCUSD',
    base: 'BTC',
    quote: 'USD',
    quoteDecimals: 5,
    quantityDecimals: 4,
    type: 'crypto',
    quantityIncrement: '0.0001',
    fees: {},
  },
  orderbook: {
    asks: [
      { quantity: '0.07', number_of_orders: null, price: 9415.035 },
      { quantity: '0.01', number_of_orders: null, price: 9417.53 },
    ],
    bids: [
      { quantity: '0.189', number_of_orders: null, price: 9410.84 },
      { quantity: '0.4', number_of_orders: null, price: 9413.74 },
    ],
  },
};

// Mock necessary for centerBookScroll function
document.querySelector = jest.fn().mockImplementation(() => ({
  clientHeight: 100,
}));

describe('<OrderBook/>', () => {
  const store = createMockStore(mockState);
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithStore(<OrderBook />, store);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('loads data and centers book scroll on mount', () => {
    expect(
      store.isActionDispatched({
        type: types.app.loadL2Data,
        instrument: mockState.selectedInstrument.id,
      }),
    ).toBe(true);
    const instance = wrapper.find('OrderBook').instance();
    jest.spyOn(instance, 'centerBookScroll');
    instance.componentDidMount();
    expect(instance.centerBookScroll).toHaveBeenCalledTimes(1);
  });

  it('renders the order book with L2 data', () => {
    expect(
      wrapper.containsMatchingElement(
        <div className="order-book-header">
          <span className="order-book-header-price">
            {`Price ${mockState.selectedInstrument.quote}`}
          </span>
          <span className="order-book-header-quantity">
            {`Quantity ${mockState.selectedInstrument.base}`}
          </span>
        </div>,
      ),
    ).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <div className="order-book-spread">
          {`Spread ${(
            mockState.orderbook.asks[0].price - mockState.orderbook.bids[0].price
          ).toFixed(mockState.selectedInstrument.quoteDecimals)} ${
            mockState.selectedInstrument.quote
          }`}
        </div>,
      ),
    ).toBe(true);

    expect(wrapper.find('.order-book-asks')).toMatchSnapshot();
    expect(wrapper.find('.order-book-bids')).toMatchSnapshot();
  });
});
