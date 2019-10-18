import { ActionsObservable } from 'redux-observable';
import verifyUserEpic from '../../src/epics/verifyUser';
import { verificationPending, verificationSuccess, verificationFailed } from '../../src/actions';
import types from '../../src/actions/types';

describe('verifyUserEpic', () => {
  const mockHash = '';
  const mockEmail = 'foo@bar.com';
  const action$ = ActionsObservable.of({
    type: types.app.verifyUser,
    hash: mockHash,
    email: mockEmail,
  });
  const state$ = null;
  const restApi = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = true;
    const auth = { verifyEmail: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [verificationPending(), verificationSuccess()];

    const result$ = verifyUserEpic(action$, state$, { auth, restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockResponse = false;
    const auth = { verifyEmail: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [verificationPending(), verificationFailed()];

    const result$ = verifyUserEpic(action$, state$, { auth, restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
