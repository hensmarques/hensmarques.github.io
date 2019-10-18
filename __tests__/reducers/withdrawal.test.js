import { withdrawal as withdrawalReducer } from '../../src/reducers';
import {
  withdrawalRequestPending,
  setWithdrawalStatus,
  withdrawalRequestFailed
} from '../../src/actions';

describe('withdrawalReducer', () => {
  const initialState = { request: 'PENDING' };

  it('should set the initial state when nothing is passed in', () => {
    const state = withdrawalReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual(initialState);
  });

  it('should return the current state on an unknown action', () => {
    let currentState = { request: 'FAILED' };
    const state = withdrawalReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('withdrawalRequestPending', () => {
    it('should set withdrawal status to pending', () => {
      let state = {};
      state = withdrawalReducer(state, withdrawalRequestPending());
      expect(state.request).toBe('PENDING');
    });
  });

  describe('setWithdrawalStatus', () => {
    it('should set withdrawal status to SUCCESS', () => {
      const withdrawal = {
        amount: 1,
        currency_id: 'BTC',
        external_address: 'jhd3289asd'
      };
      let state = {};
      state = withdrawalReducer(state, setWithdrawalStatus(withdrawal));
      expect(state.request).toBe('SUCCESS');
      expect(state.currency_id).toEqual(withdrawal.currency_id);
      expect(state.amount).toEqual(withdrawal.amount);
      expect(state.external_address).toEqual(withdrawal.external_address);
    });
  });

  describe('withdrawalRequestFailed', () => {
    it('should set withdrawal status to FAILED', () => {
      const message = 'mockMessage';
      const statusCode = 'mockStatusCode';
      let state = {};
      state = withdrawalReducer(state, withdrawalRequestFailed(message, statusCode));
      expect(state.request).toBe('FAILED');
      expect(state.message).toEqual(message);
      expect(state.statusCode).toEqual(statusCode);
    });
  });
});
