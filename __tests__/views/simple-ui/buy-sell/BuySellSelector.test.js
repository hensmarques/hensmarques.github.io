import React from 'react';
import BuySellSelector from '../../../../src/views/simple-ui/buy-sell/BuySellSelector';

describe('<BuySellSelector/>', () => {
  const currencyName = 'BTC';
  const onChange = jest.fn();

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<BuySellSelector currencyName={currencyName} onChange={onChange} value="buy" />);
    expect(wrapper).toMatchSnapshot();    
  });

  it('renders with the select-indicator on the sell side', () => {
    const value = 'sell';
    const wrapper = shallow(<BuySellSelector currencyName={currencyName} onChange={onChange} value={value} />);
    expect(wrapper.find(`.${value}-selector`).hasClass('active')).toBe(true);
    const sellSelector = wrapper.find('.sell-selector');
    const buySelector = wrapper.find('.buy-selector');
    expect(sellSelector.find('.select-indicator').exists()).toBe(true);
    expect(buySelector.find('.select-indicator').exists()).toBe(false);
  });
});
