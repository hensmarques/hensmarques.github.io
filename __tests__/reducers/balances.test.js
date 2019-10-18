import { balances as balancesReducer } from '../../src/reducers';
import { setAccounts, updateBalances } from '../../src/actions';

describe('balancesReducer', () => {
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
  const mockBalances = [
    {
      account_id: '0ae53254-2dbc-11e8-a3b6-d017c293cd5c',
      available_for_trading: '9459.52',
      available_for_withdrawal: '9459.52',
      balance: '9459.52',
      currency: 'LTC'
    },
    {
      account_id: '0ae90b0f-2dbc-11e8-a3b6-d017c293cd5c',
      available_for_trading: '0',
      available_for_withdrawal: '0',
      balance: '0',
      currency: 'XRP'
    }
  ];

  it('should set the initial state when nothing is passed in', () => {
    const state = balancesReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({ total: undefined });
  });

  it('should return the current state on an unknown action', () => {
    let currentState = { total: '5' };
    const state = balancesReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setAccounts', () => {
    it('should set the active accounts balances', () => {
      let state = {};
      state = balancesReducer(state, setAccounts(mockAccounts));
      expect(Object.keys(state)).toEqual([
        mockAccounts[0].currency_id,
        mockAccounts[1].currency_id
      ]);
      expect(state).toEqual({
        XRP: {
          total: mockAccounts[0].balance,
          trading: mockAccounts[0].available_for_trading,
          withdrawal: mockAccounts[0].available_for_withdrawal
        },
        ETH: {
          total: mockAccounts[1].balance,
          trading: mockAccounts[1].available_for_trading,
          withdrawal: mockAccounts[1].available_for_withdrawal
        }
      });
    });
  });

  describe('updateBalances', () => {
    it('should update the balances', () => {
      let state = {};
      state = balancesReducer(state, updateBalances(mockBalances));
      expect(Object.keys(state)).toEqual([mockBalances[0].currency, mockBalances[1].currency]);
      expect(state).toEqual({
        LTC: {
          total: mockBalances[0].balance,
          trading: mockBalances[0].available_for_trading,
          withdrawal: mockBalances[0].available_for_withdrawal
        },
        XRP: {
          total: mockBalances[1].balance,
          trading: mockBalances[1].available_for_trading,
          withdrawal: mockBalances[1].available_for_withdrawal
        }
      });
    });
  });
});
