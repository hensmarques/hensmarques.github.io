import { ActionsObservable } from 'redux-observable';
import changePasswordEpic from '../../src/epics/changePassword';
import { newPasswordPending, newPasswordSuccess, newPasswordFailed } from '../../src/actions';
import types from '../../src/actions/types';

describe('changePasswordEpic', () => {
  const mockPasswordPayload = {
    password: 'password',
    new_password: 'password',
    old_password: 'password',
  };
  const action$ = ActionsObservable.of({
    type: types.user.newPassword,
    passwordPayload: mockPasswordPayload,
  });
  const state$ = null;
  const restApi = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = { status_code: 'OK' };
    const auth = { updatePassword: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [newPasswordPending(), newPasswordSuccess()];

    const result$ = changePasswordEpic(action$, state$, { auth, restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockResponse = { status_code: 'ERROR' };
    const auth = { updatePassword: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [newPasswordPending(), newPasswordFailed()];

    const result$ = changePasswordEpic(action$, state$, { auth, restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
