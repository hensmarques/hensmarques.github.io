import React from 'react';
import { createMockStore } from 'redux-test-utils';
import BuySellCustom from '../../../src/views/simple-ui/BuySellCustom';
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
    fees: {
      buy: {
        method: 'quantity_percent',
        maker: '0.125',
        taker: '0.125',
      },
      sell: {
        method: 'quantity_percent',
        maker: '0.125',
        taker: '0.125',
      },
    },
  },
  instruments: {
    BTCUSD: {
      id: 'BTCUSD',
      minimumQuantity: 0.0001,
      maximumQuantity: 1000000,
      base: 'BTC',
      quote: 'USD',
      quoteDecimals: 5,
      quantityDecimals: 4,
      type: 'crypto',
      quantityIncrement: 0.0001,
      fees: {
        buy: {
          method: 'quantity_percent',
          maker: '0.125',
          taker: '0.125',
        },
        sell: {
          method: 'quantity_percent',
          maker: '0.125',
          taker: '0.125',
        },
      },
    },
  },
  tickers: {
    BTCUSD: {
      security_id: 'BTCUSD',
      bid: '3990',
      ask: '4000',
      price_24h_change: '3.87',
      volume_24h_change: '0',
      price_24h_max: '4200',
      price_24h_min: '3600',
    },
  },
  products: {},
  user: { username: 'foobar' },
  config: { debug: {} },
  maintenanceMessage: { status: false },
  orderStatus: { status: null },
};

describe('<BuySellCustom/>', () => {
  const store = createMockStore(mockState);
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithStore(<BuySellCustom />, store);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders with data from state', () => {
    expect(wrapper.find('SimpleUiWrapper').exists()).toBe(true);
    expect(wrapper.find('BuySellSelector').exists()).toBe(true);
    expect(wrapper.find('Select').exists()).toBe(true);
    expect(wrapper.find('CustomInput').exists()).toBe(true);
    expect(wrapper.find('TransactionSummary').exists()).toBe(true);
    expect(wrapper.find('BuySellCustomModal').exists()).toBe(false);
    expect(wrapper.find('Button').text()).toBe(`BUY ${mockState.selectedInstrument.base}`);
    expect(
      wrapper.containsMatchingElement(
        <div>
          <h3>
            {`Current Price Per ${mockState.selectedInstrument.base}`}
            {' '}
          </h3>
          <span>
1
            {mockState.selectedInstrument.base}
          </span>
          {' '}
          <span className="price-wrapper">
            {' '}
            {mockState.tickers[mockState.selectedInstrument.id].ask}
            {' '}
            {mockState.selectedInstrument.quote}
          </span>
        </div>,
      ),
    ).toBe(true);
  });

  it('dispatches changeInstrument when dropdown select value changes', () => {
    const mockEvent = { target: { value: 'ETHUSD' } };
    wrapper
      .find('BuySellCustom')
      .instance()
      .onInstrumentChange(mockEvent);
    expect(
      store.isActionDispatched({
        type: types.user.changeInstrument,
        instrument: mockEvent.target.value,
      }),
    ).toBe(true);
  });

  test('user can place a custom buy order', () => {
    expect(wrapper.find('BuySellCustom').state().basevalue).toBe('');
    expect(wrapper.find('BuySellCustom').state().quotevalue).toBe('');
    const changeBasevalueEvent = { name: 'basevalue', value: '2' };
    wrapper
      .find('CustomInput')
      .props()
      .onChange(changeBasevalueEvent);
    expect(wrapper.find('BuySellCustom').state().basevalue).toBe(changeBasevalueEvent.value);
    expect(wrapper.find('BuySellCustom').state().quotevalue).toBe('8000.0000');

    const changeQuotevalueEvent = { name: 'quotevalue', value: '9000' };
    wrapper
      .find('CustomInput')
      .props()
      .onChange(changeQuotevalueEvent);
    wrapper.find('Button').simulate('click');

    expect(
      store.isActionDispatched({
        type: types.user.placeOrder,
        order: {
          id: mockState.selectedInstrument.id,
          price: 0,
          quantity: 2.25,
          side: 'buy',
          timeInForce: 'gtc',
          type: 'market',
        },
      }),
    ).toBe(true);
    expect(wrapper.find('BuySellCustom').state()).toEqual({
      transactionType: 'buy',
      basevalue: '2.2500',
      quotevalue: changeQuotevalueEvent.value,
      modal: true,
    });
    expect(wrapper.find('BuySellCustomModal').exists()).toBe(true);
    expect(wrapper.find('BuySellCustomModal').text()).toBe(
      'Order submitted and executed successfully',
    );
  });
});
