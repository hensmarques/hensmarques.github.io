import { ActionsObservable } from 'redux-observable';
import resendVerificationEpic from '../../src/epics/resendVerification';
import { setResendVerificationStatus } from '../../src/actions';
import types from '../../src/actions/types';

describe('resendVerificationEpic', () => {
  const action$ = ActionsObservable.of({
    type: types.user.resendVerification,
    email: 'foo@bar.com'
  });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async done => {
    const mockResponse = { status_code: 'OK' };
    const restApi = { resendVerification: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [
      setResendVerificationStatus('pending'),
      setResendVerificationStatus('accepted')
    ];

    const result$ = resendVerificationEpic(action$, state$, { restApi });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async done => {
    const mockResponse = { status_code: 'ERROR' };
    const restApi = { resendVerification: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [
      setResendVerificationStatus('pending'),
      setResendVerificationStatus('rejected')
    ];

    const result$ = resendVerificationEpic(action$, state$, { restApi });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
