import { ActionsObservable } from 'redux-observable';
import makeWithdrawalEpic from '../../src/epics/makeWithdrawal';
import {
  withdrawalRequestPending,
  setWithdrawalStatus,
  withdrawalRequestFailed,
} from '../../src/actions';
import types from '../../src/actions/types';

describe('makeWithdrawalEpic', () => {
  const action$ = ActionsObservable.of({
    type: types.user.makeWithdrawal,
    withdrawalRequest: {
      currency_id: 'BTC',
      amount: '1',
      address: '38j8FaREbrorZg7ixQ76ysUXgUtW4XBroE',
      code: '065263',
    },
  });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockExchange2FAResult = { exchangeCode: '123456' };
    const mockResponse = {
      type: 'withdrawal',
      description: null,
      reason: null,
      id: '011614ea-a661-401d-a3d3-38ef0cccce27',
      status: 'pending',
      address: '38j8FaREbrorZg7ixQ76ysUXgUtW4XBroE',
      confirmations: 0,
      creation_time: 1563544125577,
      modification_time: 1563544125577,
      currency_id: 'BTC',
      post_balance: null,
      internal_transaction_id: null,
      transaction_id: null,
      confirmations_needed: 0,
      amount: '1',
    };
    const auth = { completeExchange2FA: jest.fn().mockResolvedValue(mockExchange2FAResult) };
    const managerSocket = { makeWithdrawal: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [withdrawalRequestPending(), setWithdrawalStatus(mockResponse)];

    const result$ = makeWithdrawalEpic(action$, state$, { auth, managerSocket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockExchange2FAResult = { exchangeCode: '123456' };
    const mockResponse = { status_code: 'ERROR', message: 'Withdrawal failed' };
    const auth = { completeExchange2FA: jest.fn().mockResolvedValue(mockExchange2FAResult) };
    const managerSocket = { makeWithdrawal: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [
      withdrawalRequestPending(),
      withdrawalRequestFailed(mockResponse.message, mockResponse.status_code),
    ];

    const result$ = makeWithdrawalEpic(action$, state$, { auth, managerSocket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
