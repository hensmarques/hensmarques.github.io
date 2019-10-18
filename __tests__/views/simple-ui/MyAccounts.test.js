import React from 'react';
import { MyAccounts } from '../../../src/views/simple-ui/MyAccounts';

describe('<MyAccounts/>', () => {
  const loadTransactions = jest.fn();
  const getTransactionsList = jest.fn();
  const getCompletedTransactionsList = jest.fn();
  const loadData = jest.fn();
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(
      <MyAccounts
        getTransactionsList={getTransactionsList}
        loadTransactions={loadTransactions}
        getCompletedTransactionsList={getCompletedTransactionsList}
        loadData={loadData}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('transaction modal integration', () => {
    const mockState = {
      modal: 'deposit',
      currency: 'USD'
    };
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <MyAccounts
          getTransactionsList={getTransactionsList}
          loadTransactions={loadTransactions}
          getCompletedTransactionsList={getCompletedTransactionsList}
          loadData={loadData}
        />
      );
    });

    it('renders the TransactionModal', () => {
      expect(wrapper.find('Connect(TransactionModal)').exists()).toBe(false);
      wrapper.setState(mockState);
      expect(wrapper.find('Connect(TransactionModal)').exists()).toBe(true);
      expect(
        wrapper.find('Connect(TransactionModal)').props().transactionType
      ).toBe(mockState.modal);
      expect(wrapper.find('Connect(TransactionModal)').props().currency).toBe(
        mockState.currency
      );
    });

    it('hides the TransactionModal', () => {
      wrapper.setState(mockState);
      expect(wrapper.find('Connect(TransactionModal)').exists()).toBe(true);
      wrapper
        .find('Connect(TransactionModal)')
        .props()
        .showModal();
      expect(wrapper.find('Connect(TransactionModal)').exists()).toBe(false);
    });
  });
});
