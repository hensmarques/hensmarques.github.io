import { settings as settingsReducer } from '../../src/reducers';
import { setUserSettingsPending, setUserSettings, setUserSettingsError } from '../../src/actions';

describe('settingsReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = settingsReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({});
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = settingsReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('setUserSettingsPending', () => {
    it('should set settings status to pending', () => {
      let state = {};
      state = settingsReducer(state, setUserSettingsPending());
      expect(state.status).toBe('pending');
    });
  });

  describe('setUserSettings', () => {
    it('should set the settings and set status to success', () => {
      const mockSettings = {
        is_allow_show_exchange_codes: false,
        is_using_2fa: false,
        is_using_2fa_for_withdrawal: false,
        custom_settings: null,
        client_user_id: null
      };
      let state = {};
      state = settingsReducer(state, setUserSettings({ settings: mockSettings }));
      expect(state.settings).toBe(mockSettings);
      expect(state.status).toBe('success');
    });
  });

  describe('setUserSettingsError', () => {
    it('should set the settings error and set status to error', () => {
      const mockError = 'bar';
      let state = {};
      state = settingsReducer(state, setUserSettingsError({ error: mockError }));
      expect(state.error).toBe(mockError);
      expect(state.status).toBe('error');
    });
  });
});
