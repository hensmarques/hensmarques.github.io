import { secretCode as secretCodeReducer } from '../../src/reducers';
import {
  setSecretCodePending,
  setSecretCode,
  setSecretCodeError,
  resetSecretCodePending,
  resetSecretCode,
  resetSecretCodeError
} from '../../src/actions';

describe('secretCodeReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = secretCodeReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({});
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = secretCodeReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setSecretCodePending', () => {
    it('should set secret code status to pending', () => {
      let state = {};
      state = secretCodeReducer(state, setSecretCodePending());
      expect(state.status).toBe('pending');
    });
  });

  describe('setSecretCode', () => {
    it('should set the secret code and set status to success', () => {
      const mockSecretCode = 'foo';
      let state = {};
      state = secretCodeReducer(state, setSecretCode({ secretCode: mockSecretCode }));
      expect(state.secretCode).toBe(mockSecretCode);
      expect(state.status).toBe('success');
    });
  });

  describe('setSecretCodeError', () => {
    it('should set the secret code error and set status to error', () => {
      const mockError = 'bar';
      let state = {};
      state = secretCodeReducer(state, setSecretCodeError({ error: mockError }));
      expect(state.error).toBe(mockError);
      expect(state.status).toBe('error');
    });
  });

  describe('resetSecretCodePending', () => {
    it('should set the secret code and set status to success', () => {
      let state = {};
      state = secretCodeReducer(state, resetSecretCodePending());
      expect(state.status).toBe('pending');
    });
  });

  describe('resetSecretCode', () => {
    it('should set the secret code and set status to success', () => {
      const mockSecretCode = 'foo';
      let state = {};
      state = secretCodeReducer(state, resetSecretCode({ secretCode: mockSecretCode }));
      expect(state.secretCode).toBe(mockSecretCode);
      expect(state.status).toBe('success');
    });
  });

  describe('resetSecretCodeError', () => {
    it('should set the secret code error and set status to error', () => {
      const mockError = 'bar';
      let state = {};
      state = secretCodeReducer(state, resetSecretCodeError({ error: mockError }));
      expect(state.error).toBe(mockError);
      expect(state.status).toBe('error');
    });
  });
});
