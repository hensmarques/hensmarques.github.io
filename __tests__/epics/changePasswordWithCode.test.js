import { ActionsObservable } from 'redux-observable';
import changePasswordWithCodeEpic from '../../src/epics/changePasswordWithCode';
import {
  changePasswordWithCodePending,
  changePasswordWithCodeSuccess,
  changePasswordWithCodeFailed,
} from '../../src/actions';
import types from '../../src/actions/types';

describe('changePasswordWithCodeEpic', () => {
  const mockPasswordPayload = {
    username: 'foobar',
    code: '123456',
    password: 'password',
    new_password: 'password',
  };
  const action$ = ActionsObservable.of({
    type: types.user.changePasswordWithCode,
    passwordPayload: mockPasswordPayload,
  });
  const state$ = null;
  const restApi = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = { status_code: 'OK' };
    const auth = { changePasswordWithCode: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [changePasswordWithCodePending(), changePasswordWithCodeSuccess()];

    const result$ = changePasswordWithCodeEpic(action$, state$, { restApi, auth });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockError = 'mockError';
    const auth = { changePasswordWithCode: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [
      changePasswordWithCodePending(),
      changePasswordWithCodeFailed(mockError),
    ];

    const result$ = changePasswordWithCodeEpic(action$, state$, { restApi, auth });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
