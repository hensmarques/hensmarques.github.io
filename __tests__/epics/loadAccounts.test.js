import { ActionsObservable } from 'redux-observable';
import loadAccountsEpic from '../../src/epics/loadAccounts';
import { setAccounts, loadBalances } from '../../src/actions';
import types from '../../src/actions/types';

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

describe('loadAccountsEpic', () => {
  it('dispatches the correct actions when it is successful', async done => {
    const action$ = ActionsObservable.of({ type: types.app.loadAccounts });
    const state$ = null;
    const socket = { accounts: jest.fn().mockResolvedValue(mockAccounts) };
    const expectedActions = [setAccounts(mockAccounts), loadBalances()];

    const result$ = loadAccountsEpic(action$, state$, { socket });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
