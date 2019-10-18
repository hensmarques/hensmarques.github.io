import { deposit as depositReducer } from '../../src/reducers';
import {
  depositRequestPending,
  setDepositStatus,
  depositRequestFailed
} from '../../src/actions';

describe('depositReducer', () => {
  const initialState = {request: 'PENDING'};

  it('should set the initial state when nothing is passed in', () => {
    const state = depositReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual(initialState);
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = depositReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setDepositPending', () => {
    it('should set deposit status to pending', () => {
      let state = {};
      state = depositReducer(state, depositRequestPending());
      expect(state.request).toBe('PENDING');
    });
  });

  describe('setDepositStatus', () => {
    it('should set deposit status to accepted', () => {
      const mockDeposit = {
        amount: 1,
        currency: 'USD'
      };
      let state = {};
      state = depositReducer(state, setDepositStatus({ deposit: mockDeposit }));

      expect(state.deposit).toEqual(mockDeposit);
      expect(state.request).toBe('SUCCESS');
    });
  });

  describe('depositRequestFailed', () => {
    it('should set deposit status to failed', () => {
      const message = 'mockMessage';
      const statusCode = 'mockStatusCode';
      let state = {};
      state = depositReducer(state, depositRequestFailed(message, statusCode));
      expect(state.request).toBe('FAILED');
      expect(state.message).toBe(message);
      expect(state.statusCode).toBe(statusCode);
    });
  });
});
