import { transactions as transactionsReducer } from '../../src/reducers/transactions';
import { status } from '../../src/constants';
import {
  transactionsPending,
  transactionsSuccess,
  transactionsFailed,
  completedTransactions,
  completedTransactionsFailed,
  setCurrentTransaction,
} from '../../src/actions';

describe('transactionsReducer', () => {
  const mockTransactions = [
    {
      reason: null,
      type: 'deposit',
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

  it('should set the initial state when nothing is passed in', () => {
    const state = transactionsReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({ status: status.pending, transactions: {} });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = { status: status.pending, transactions: {} };
    const state = transactionsReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('transactionsPending', () => {
    it('should set status to pending', () => {
      let state = { status: status.success, transactions: {} };
      state = transactionsReducer(state, transactionsPending());
      expect(state).toEqual({ status: status.pending, transactions: {} });
    });
  });

  describe('transactionsSuccess', () => {
    it('should set status to success and set the transactions', () => {
      let state = {};
      state = transactionsReducer(state, transactionsSuccess(mockTransactions));
      expect(state).toEqual({ status: status.success, list: mockTransactions });
    });
  });

  describe('transactionsFailed', () => {
    it('should set status to failed and set the error', () => {
      const mockError = 'mockError';
      let state = {};
      state = transactionsReducer(state, transactionsFailed(mockError));
      expect(state).toEqual({ status: status.failed, error: mockError });
    });
  });

  describe('completedTransactions', () => {
    it('should set status to success and set the completed transactions', () => {
      let state = {};
      state = transactionsReducer(state, completedTransactions(mockTransactions));
      expect(state).toEqual({
        status: status.success,
        completedStatus: status.success,
        completedList: mockTransactions,
      });
    });
  });

  describe('completedTransactionsFailed', () => {
    it('should set status to failed and set the error', () => {
      const mockError = 'mockError';
      let state = {};
      state = transactionsReducer(state, completedTransactionsFailed(mockError));
      expect(state).toEqual({ status: status.failed, error: mockError });
    });
  });

  describe('setCurrentTransaction', () => {
    it('should set the current transaction', () => {
      let state = {};
      state = transactionsReducer(state, setCurrentTransaction(mockTransactions[0]));
      expect(state).toEqual({ list: [], currentTransaction: mockTransactions[0] });
    });
  });
});
