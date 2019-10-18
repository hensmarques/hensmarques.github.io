import React from 'react';
import { AccountBalance } from '../../../src/views/trade-ui/AccountBalance';

describe('<AccountBalance/>', () => {
  const selectedInstrument = {
    base: 'BTC',
    quote: 'USD'
  };
  const balances = {
    USD: {total: 5000, trading: 4000},
    BTC: {total: 2, trading: 2}
  };
  const products = {
    USD: {decimals: 2},
    BTC: {decimals: 2}
  };
  const loadData = jest.fn();
  
  it('renders without crashing and fires loadData on mount', () => {
    shallow(<AccountBalance loadData={loadData} selectedInstrument={selectedInstrument} balances={balances} products={products} />);
    expect(loadData).toHaveBeenCalled();
  });

  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<AccountBalance loadData={loadData} selectedInstrument={selectedInstrument} balances={balances} products={products} />);
    expect(wrapper).toMatchSnapshot();
  });
});