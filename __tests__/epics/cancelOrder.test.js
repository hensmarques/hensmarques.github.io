import { ActionsObservable } from 'redux-observable';
import cancelOrderEpic from '../../src/epics/cancelOrder';
import { cancelOrderSuccess, cancelOrderError } from '../../src/actions';
import types from '../../src/actions/types';

describe('cancelOrderEpic', () => {
  const mockOrderId = '99ddc2f7-8a36-48d7-9171-db94c9ccf399';
  const action$ = ActionsObservable.of({
    type: types.user.cancelOrder,
    orderId: mockOrderId,
  });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const socket = { cancelOrder: jest.fn().mockImplementation(() => Promise.resolve()) };
    const expectedActions = [cancelOrderSuccess(mockOrderId)];

    const result$ = cancelOrderEpic(action$, state$, { socket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockResponse = { status: 'rejected', status_code: 'ERROR', message: 'Order not found' };
    const socket = { cancelOrder: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [cancelOrderError(mockResponse.message, mockResponse.status_code)];

    const result$ = cancelOrderEpic(action$, state$, { socket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
