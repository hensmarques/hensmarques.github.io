import React from 'react';
import { BuySell } from '../../../src/views/simple-ui/BuySell';

describe('<BuySell/>', () => {
  const mockProps = {
    instruments: [],
    selectedInstrument: {
      id: 'BTCUSD',
      base: 'BTC',
      quote: 'USD'
    },
    selectedBidAsk: {
      ask: 3000,
      bid: 3030
    },
    changeInstrument: jest.fn()
  };

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<BuySell {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the instrument options in the select dropdown', () => {
    const instruments = [{ id: 'BTCJPY' }, { id: 'BTCGBP' }, { id: 'XRPUSD' }];
    mockProps.instruments = instruments;
    const wrapper = shallow(<BuySell {...mockProps} />);
    const selectOptions = wrapper.find('Select').props().options;
    expect(selectOptions[0].name).toBe(instruments[0].id);
    expect(selectOptions[0].value).toBe(instruments[0].id);
    expect(selectOptions[1].name).toBe(instruments[1].id);
    expect(selectOptions[1].value).toBe(instruments[1].id);
    expect(selectOptions[2].name).toBe(instruments[2].id);
    expect(selectOptions[2].value).toBe(instruments[2].id);
  });

  it('dispatches changeInstrument when dropdown select value changes', () => {
    const mockEvent = { target: { value: 'BTCJPY' } };
    const wrapper = shallow(<BuySell {...mockProps} />);
    wrapper.instance().onInstrumentChange(mockEvent);
    expect(mockProps.changeInstrument).toHaveBeenCalledWith(mockEvent.target.value);
  });

  it('switches the BuySellSelector value when transaction type changes', () => {
    const wrapper = shallow(<BuySell {...mockProps} />);
    expect(wrapper.find('BuySellSelector').props().value).toBe('buy');
    wrapper.setState({ transactionType: 'sell' });
    expect(wrapper.find('BuySellSelector').props().value).toBe('sell');
  });
});
