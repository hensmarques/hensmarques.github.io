import React from 'react';
import { Balances } from '../../../../src/views/simple-ui/sidebar/Balances';

describe('<Balances/>', () => {
  const balances = {
    USD: {total: 5000},
    BTC: {total: 2},
    ETH: {total: 20},
    LTC: {total: 20},
    XRP: {total: 5000},
    BCH: {total: 20},
    XMR: {total: 20}
  };
  const products = {
    USD: {decimals: 2},
    BTC: {decimals: 2},
    ETH: {decimals: 2},
    LTC: {decimals: 2},
    XRP: {decimals: 2},
    BCH: {decimals: 2},
    XMR: {decimals: 2}
  };
  const loadData = jest.fn();

  it('renders without crashing and fires loadData on mount', () => {
    shallow(<Balances loadData={loadData} products={products} />);
    expect(loadData).toHaveBeenCalled();
  });

  it('renders the balances and matches the snapshot', () => {
    const wrapper = shallow(<Balances loadData={loadData} products={products} balances={balances} />);
    expect(wrapper).toMatchSnapshot();
  });
});