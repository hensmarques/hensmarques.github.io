import { ActionsObservable } from 'redux-observable';
import loadExchangeSettingsEpic from '../../src/epics/loadExchangeSettings';
import {
  exchangeSettingsPending,
  exchangeSettingsSuccess,
  exchangeSettingsFailed,
} from '../../src/actions';
import types from '../../src/actions/types';

const mockExchangeSettings = {
  keepalive_timeout: 600000,
  login_2fa_enabled: true,
  login_2fa_mandatory: false,
  withdrawal_2fa_enabled: true,
  withdrawal_2fa_mandatory: true,
  basic_advanced_switcher_enabled: true,
  password_for_user_settings_change_required: false,
};
const mockError = 'error';

describe('loadExchangeSettingsEpic', () => {
  const action$ = ActionsObservable.of({ type: types.app.loadExchangeSettings });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const socket = { globalSettings: jest.fn().mockResolvedValue(mockExchangeSettings) };
    const expectedActions = [
      exchangeSettingsPending(),
      exchangeSettingsSuccess(mockExchangeSettings),
    ];

    const result$ = loadExchangeSettingsEpic(action$, state$, { socket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const socket = { globalSettings: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [exchangeSettingsPending(), exchangeSettingsFailed(mockError)];

    const result$ = loadExchangeSettingsEpic(action$, state$, { socket });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
