import { ActionsObservable } from 'redux-observable';
import makeDepositEpic from '../../src/epics/makeDeposit';
import { depositRequestPending, setDepositStatus, depositRequestFailed } from '../../src/actions';
import types from '../../src/actions/types';

describe('makeDepositEpic', () => {
  const action$ = ActionsObservable.of({
    type: types.user.makeDeposit,
    product: 'USD',
    amount: '200',
  });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = {
      type: 'deposit',
      description: null,
      reason: null,
      id: 'c8c75b7e-adbf-43d7-aba6-bf931672d08d',
      status: 'pending',
      address: null,
      confirmations: 0,
      creation_time: 1563547382393,
      modification_time: 1563547382393,
      currency_id: 'USD',
      post_balance: null,
      internal_transaction_id: null,
      transaction_id: null,
      confirmations_needed: 0,
      amount: '200',
    };
    const managerSocket = { makeDeposit: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [depositRequestPending(), setDepositStatus(mockResponse)];

    const result$ = makeDepositEpic(action$, state$, { managerSocket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockResponse = { status_code: 'ERROR', message: 'Deposit failed' };
    const managerSocket = { makeDeposit: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [
      depositRequestPending(),
      depositRequestFailed(mockResponse.message, mockResponse.status_code),
    ];

    const result$ = makeDepositEpic(action$, state$, { managerSocket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
