import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import updateSettingsEpic from '../../src/epics/updateSettings';
import {
  setUpdateSettingsPending,
  setUpdateSettingsAccepted,
  setUpdateSettingsError,
} from '../../src/actions';
import types from '../../src/actions/types';

const action$ = ActionsObservable.of({
  type: types.user.updateSettings,
  settings: {
    code: '123456',
    is_using_2fa: true,
    is_using_2fa_for_withdrawal: true,
    email_address: 'foo@bar.com',
    password: 'password',
  },
});
const state$ = of({
  settings: {
    is_using_2fa: false,
    is_using_2fa_for_withdrawal: false,
    method_for_2fa: '',
    client_user_id: null,
    status: 'success',
  },
});
const socket = null;

describe('updateSettingsEpic', () => {
  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = { status_code: 'SUCCESS', message: null };
    const auth = { modifySettings: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [setUpdateSettingsPending(), setUpdateSettingsAccepted(mockResponse)];

    const result$ = updateSettingsEpic(action$, state$, { auth, socket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockResponse = { status_code: 'ERROR', message: 'mock message' };
    const auth = { modifySettings: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [
      setUpdateSettingsPending(),
      setUpdateSettingsError(mockResponse.message, mockResponse.status_code),
    ];

    const result$ = updateSettingsEpic(action$, state$, { auth, socket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
