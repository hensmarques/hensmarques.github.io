import React from 'react';
import { InstrumentSelect } from '../../../src/views/trade-ui/InstrumentSelect';

const mockProps = {
  instruments: {
    BTCUSD: {
      id: 'BTCUSD',
      base: 'BTC',
      quote: 'USD',
      quoteDecimals: 3
    },
    ETHBTC: {
      id: 'ETHBTC',
      base: 'ETH',
      quote: 'BTC',
      quoteDecimals: 9
    }
  },
  tickers: {},
  selectedInstrument: {
    id: 'BTCUSD',
    base: 'BTC',
    quote: 'USD',
    quoteDecimals: 3
  },
  changeInstrument: jest.fn(),
  closeDropdown: jest.fn()
};
const mockTickers = {
  BTCUSD: {
    security_id: 'BTCUSD',
    bid: '3992.17',
    ask: '4045.44',
    price_24h_change: '3.87',
    volume_24h_change: '0',
    price_24h_max: '4226.34',
    price_24h_min: '3630.42'
  },
  ETHBTC: {
    security_id: 'ETHBTC',
    bid: '0.0272151',
    ask: '0.0272479',
    price_24h_change: '0',
    volume_24h_change: '0',
    price_24h_max: '0.0272479',
    price_24h_min: '0.0272151'
  }
};

describe('<InstrumentSelect/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<InstrumentSelect {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with ticker prices', () => {
    const props = Object.assign({}, mockProps, {
      tickers: mockTickers
    });
    const wrapper = shallow(<InstrumentSelect {...props} />);
    expect(
      wrapper.containsAllMatchingElements([
        <span className="instrument-symbol">{mockTickers['BTCUSD'].security_id}</span>,
        <span className="instrument-price">{mockTickers['BTCUSD'].ask}</span>,
        <span className="instrument-symbol">{mockTickers['ETHBTC'].security_id}</span>,
        <span className="instrument-price">{mockTickers['ETHBTC'].ask}</span>
      ])
    ).toBe(true);
  });

  it('filters the instruments with the input box', () => {
    const wrapper = shallow(<InstrumentSelect {...mockProps} />);
    expect(wrapper.state()).toEqual({ filter: '' });
    expect(wrapper.containsMatchingElement(<span className="instrument-symbol">BTCUSD</span>)).toBe(
      true
    );

    // simulate filtering
    const filterQuery = 'eth';
    const mockEvent = { target: { value: filterQuery } };
    wrapper.find('input').simulate('change', mockEvent);
    expect(wrapper.state()).toEqual({ filter: filterQuery.toUpperCase() });
    expect(wrapper.containsMatchingElement(<span className="instrument-symbol">BTCUSD</span>)).toBe(
      false
    );
  });

  it('changes the selected instrument and closes the dropdown', () => {
    const wrapper = shallow(<InstrumentSelect {...mockProps} />);
    expect(mockProps.changeInstrument).not.toHaveBeenCalled();
    expect(mockProps.closeDropdown).not.toHaveBeenCalled();
    wrapper
      .find('.instrument-row')
      .last()
      .simulate('click');
    expect(mockProps.changeInstrument).toHaveBeenCalledWith('ETHBTC');
    expect(mockProps.closeDropdown).toHaveBeenCalled();
  });
});
