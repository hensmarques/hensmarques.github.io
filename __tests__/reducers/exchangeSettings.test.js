import { exchangeSettings as exchangeSettingsReducer } from '../../src/reducers/exchangeSettings';
import { status } from '../../src/constants';
import {
  exchangeSettingsPending,
  exchangeSettingsSuccess,
  exchangeSettingsFailed,
} from '../../src/actions';

describe('exchangeSettingsReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = exchangeSettingsReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({});
  });

  it('should return the current state on an unknown action', () => {
    const currentState = {};
    const state = exchangeSettingsReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('exchangeSettingsPending', () => {
    it('should set status to pending', () => {
      let state = {};
      state = exchangeSettingsReducer(state, exchangeSettingsPending());
      expect(state).toEqual({ status: status.pending });
    });
  });

  describe('exchangeSettingsSuccess', () => {
    it('should set status to success and set the filename', () => {
      const mockSettings = {
        keepalive_timeout: 600000,
        login_2fa_enabled: true,
        login_2fa_mandatory: false,
        withdrawal_2fa_enabled: true,
        withdrawal_2fa_mandatory: true,
        basic_advanced_switcher_enabled: true,
        password_for_user_settings_change_required: false,
      };
      let state = {};
      state = exchangeSettingsReducer(state, exchangeSettingsSuccess(mockSettings));
      expect(state).toEqual({ status: status.success, ...mockSettings });
    });
  });

  describe('exchangeSettingsFailed', () => {
    it('should set status to failed and set the error', () => {
      const mockError = { error: 'mockError' };
      let state = {};
      state = exchangeSettingsReducer(state, exchangeSettingsFailed(mockError));
      expect(state).toEqual({ status: status.failed, ...mockError });
    });
  });
});
