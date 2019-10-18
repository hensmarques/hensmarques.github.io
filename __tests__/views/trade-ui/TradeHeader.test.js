import React from 'react';
import { createMockStore } from 'redux-test-utils';
import TradeHeader from '../../../src/views/trade-ui/TradeHeader';

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
  tickers: {
    BTCUSD: {
      security_id: 'BTCUSD',
      bid: '3992.17',
      ask: '4045.44',
      price_24h_change: '3.87',
      volume_24h_change: '0',
      price_24h_max: '4226.34',
      price_24h_min: '3630.42',
    },
  },
  products: {},
  user: { username: 'foobar' },
  config: {
    tradeUi: {
      dropdownInstrumentSelect: true,
    },
  },
};

describe('<TradeHeader/>', () => {
  const store = createMockStore(mockState);
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithStore(<TradeHeader />, store);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the props correctly', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <div className="header-accounts">
          <span className="header-user-info">
            {' '}
            {mockState.user.username}
          </span>
        </div>,
        <span className="current-instrument ">{mockState.selectedInstrument.id}</span>,
      ]),
    ).toBe(true);
    expect(wrapper.find('HeaderTicker')).toMatchSnapshot();
  });

  it('can toggle dropdown instrument select component', () => {
    expect(wrapper.find('TradeHeader').state().showDropdown).toBe(false);
    expect(wrapper.find('InstrumentSelect').exists()).toBe(false);
    expect(wrapper.find('.instruments').exists()).toBe(false);
    wrapper.find('.dropdown-button').simulate('click');

    expect(wrapper.find('TradeHeader').state().showDropdown).toBe(true);
    expect(wrapper.find('InstrumentSelect').exists()).toBe(true);
    expect(wrapper.find('.instruments').exists()).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <span className="current-instrument selected">{mockState.selectedInstrument.id}</span>,
      ),
    ).toBe(true);
    wrapper.find('.dropdown-button').simulate('click');

    expect(wrapper.find('TradeHeader').state().showDropdown).toBe(false);
    expect(wrapper.find('InstrumentSelect').exists()).toBe(false);
    expect(wrapper.find('.instruments').exists()).toBe(false);
  });

  it('can open sidebar', () => {
    expect(wrapper.find('TradeHeader').state().showSidebar).toBe(false);
    expect(wrapper.find('TradeSidebar').props().showSidebar).toBe(false);
    expect(wrapper.find('.sidebar.open').exists()).toBe(false);
    wrapper.find('.header-hamburger-button').simulate('click');

    expect(wrapper.find('TradeHeader').state().showSidebar).toBe(true);
    expect(wrapper.find('TradeSidebar').props().showSidebar).toBe(true);
    expect(wrapper.find('.sidebar.open').exists()).toBe(true);
  });
});
