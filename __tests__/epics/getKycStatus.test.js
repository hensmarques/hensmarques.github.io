import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import {
  getKycStatus as getKycStatusEpic,
  kycRequestStatus as kycRequestStatusEpic,
  updateKycStatus as updateKycStatusEpic,
} from '../../src/epics/getKycStatus';
import {
  kycStatusPending,
  kycStatusSuccess,
  kycStatusFailed,
  kycRequestPending,
  kycRequestSuccess,
  kycRequestFailed,
} from '../../src/actions';
import types from '../../src/actions/types';

describe('getKycStatusEpic', () => {
  const action$ = ActionsObservable.of({ type: types.app.getKycStatus });
  const state$ = of({ user: { kycStatus: {} } });

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = 'pending';
    const restApi = { getKycStatus: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [kycStatusPending(), kycStatusSuccess(mockResponse)];

    const result$ = getKycStatusEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockError = 'mockError';
    const restApi = { getKycStatus: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [kycStatusPending(), kycStatusFailed(mockError)];

    const result$ = getKycStatusEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});

describe('kycRequestStatusEpic', () => {
  const action$ = ActionsObservable.of({ type: types.app.kycRequestStatus });
  const state$ = of({ user: { kycStatus: {} } });

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = { status: 'pending' };
    const restApi = { kycRequestStatus: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [kycRequestPending(), kycRequestSuccess(mockResponse.status)];

    const result$ = kycRequestStatusEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockError = 'mockError';
    const restApi = { kycRequestStatus: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [kycRequestPending(), kycRequestFailed(mockError)];

    const result$ = kycRequestStatusEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});

describe('updateKycStatusEpic', () => {
  const action$ = ActionsObservable.of({ type: types.app.updateKycStatus });
  const state$ = of({ user: { kycStatus: {} } });

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = 'pending';
    const restApi = { updateKycStatus: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [kycStatusPending(), kycStatusSuccess(mockResponse)];

    const result$ = updateKycStatusEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockError = 'mockError';
    const restApi = { updateKycStatus: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [kycStatusPending(), kycStatusFailed(mockError)];

    const result$ = updateKycStatusEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
