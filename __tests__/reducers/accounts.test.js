import { accounts as accountsReducer } from '../../src/reducers';
import { setAccounts } from '../../src/actions';

describe('accountsReducer', () => {
  const mockAccounts = [
    {
      available_for_trading: '0',
      available_for_withdrawal: '0',
      balance: '0',
      currency_id: 'XRP',
      id: '0ae30f23-2dbc-11e8-a3b6-d017c293cd5c',
      status: 'active'
    },
    {
      available_for_trading: '0',
      available_for_withdrawal: '0',
      balance: '0',
      currency_id: 'ETH',
      id: '0ae9a943-2dbc-11e8-a3b6-d017c293cd5c',
      status: 'active'
    }
  ];

  it('should set the initial state when nothing is passed in', () => {
    const state = accountsReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({});
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = accountsReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setAccounts', () => {
    it('should set the active accounts', () => {
      let state = {};
      state = accountsReducer(state, setAccounts(mockAccounts));
      expect(Object.keys(state)).toEqual([mockAccounts[0].id, mockAccounts[1].id]);
      expect(state).toEqual({
        '0ae30f23-2dbc-11e8-a3b6-d017c293cd5c': mockAccounts[0].currency_id,
        '0ae9a943-2dbc-11e8-a3b6-d017c293cd5c': mockAccounts[1].currency_id
      });
    });
  });
});
