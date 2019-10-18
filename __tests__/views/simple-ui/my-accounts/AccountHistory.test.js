import React from 'react';
import { AccountHistory } from '../../../../src/views/simple-ui/my-accounts/AccountHistory';
import { getFormattedDate, floor } from '../../../../src/util/helpers';

const mockTransactions = [
  {
    type: 'deposit',
    reason: null,
    description: null,
    id: 'USD-1',
    status: 'succeeded',
    address: null,
    confirmations: null,
    creation_time: 1564669475391,
    modification_time: 1564669475391,
    currency_id: 'USD',
    amount: '50000',
    post_balance: '49000',
    internal_transaction_id: 'dd305575-856a-4a67-98e9-991a003606b9',
    transaction_id: null,
    confirmations_needed: null,
  },
];
const mockProps = {
  products: {
    BTC: {
      id: 'BTC',
      type: 'crypto',
      name: 'BTC',
      precision: 8,
      withdrawalCommission: '5',
      depositCommission: '2',
      decimals: 8,
      balance: 0,
      hold: 0,
    },
    USD: {
      id: 'USD',
      type: 'fiat',
      name: 'USD',
      precision: 8,
      withdrawalCommission: '5',
      depositCommission: '2',
      decimals: 2,
      balance: 0,
      hold: 0,
    },
  },
  rowsPerPage: 8,
  dateFormat: 'MM-DD-YYYY',
  timeFormat: '12hr',
};

describe('<AccountHistory/>', () => {
  it('renders with no transactions and matches the snapshot', () => {
    const props = { ...mockProps, transactions: [] };
    const wrapper = shallow(<AccountHistory {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with transactions', () => {
    const props = { ...mockProps, transactions: mockTransactions };
    const wrapper = shallow(<AccountHistory {...props} />);
    const mockTransaction = mockTransactions[0];
    expect(wrapper.find('.empty').length).toBe(mockProps.rowsPerPage - mockTransactions.length);
    expect(wrapper.find('.transaction-id').props().children).toBe(mockTransaction.id);
    expect(wrapper.find('.type').props().children).toBe(mockTransaction.type);
    expect(wrapper.find('.product').props().children).toBe(mockTransaction.currency_id);
    expect(wrapper.find('.total').props().children).toBe(
      floor(mockTransaction.amount * 1, mockProps.products[mockTransaction.currency_id].decimals),
    );
    expect(wrapper.find('.status').props().children).toBe(mockTransaction.status);
    expect(wrapper.find('.time').props().children).toBe(
      getFormattedDate(mockTransaction.modification_time),
    );
  });

  it('handles pagination when the number of transactions is greater than rowsPerPage', () => {
    const moreMockTransactions = new Array(10).fill(mockTransactions[0]);
    const props = { ...mockProps, transactions: moreMockTransactions };
    const wrapper = shallow(<AccountHistory {...props} />);
    expect(wrapper.state()).toEqual({ page: 1 });
    expect(wrapper.find('Paginator').props().currentPage).toBe(1);
    expect(wrapper.find('Paginator').props().numItems).toBe(moreMockTransactions.length);
    expect(wrapper.find('Paginator').props().itemsPerPage).toBe(mockProps.rowsPerPage);
    wrapper
      .find('Paginator')
      .props()
      .setPage(2);
    expect(wrapper.state()).toEqual({ page: 2 });
    expect(wrapper.find('Paginator').props().currentPage).toBe(2);
  });
});
