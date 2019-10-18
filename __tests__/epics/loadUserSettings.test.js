import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import loadUserSettingsEpic from '../../src/epics/loadUserSettings';
import {
  setUserSettingsPending,
  setUserSettings,
  setUserSettingsError
} from '../../src/actions';
import types from '../../src/actions/types';

describe('loadUserSettingsEpic', () => {
  const mockSettings = {
    is_allow_show_exchange_codes: true,
    is_using_2fa: false,
    is_using_2fa_for_withdrawal: false,
    client_user_id: null,
    custom_settings: null,
    status: 'success'
  };
  const action$ = ActionsObservable.of({ type: types.app.loadUserSettings });

  it('dispatches the correct actions when it is successful', async done => {
    const state$ = of({ settings: {} });
    const socket = { settings: jest.fn().mockResolvedValue(mockSettings) };
    const expectedActions = [setUserSettingsPending(), setUserSettings(mockSettings)];

    const result$ = loadUserSettingsEpic(action$, state$, { socket });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async done => {
    const mockError = 'error';
    const state$ = of({ settings: {} });
    const socket = { settings: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [setUserSettingsPending(), setUserSettingsError(mockError)];

    const result$ = loadUserSettingsEpic(action$, state$, { socket });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
