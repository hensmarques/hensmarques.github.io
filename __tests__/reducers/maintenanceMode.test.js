import { maintenanceMode as maintenanceModeReducer } from '../../src/reducers/maintenanceMode';
import { maintenanceModeStatus, maintenanceModeMsg } from '../../src/actions';

describe('maintenanceModeReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = maintenanceModeReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({ status: false });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = { status: true };
    const state = maintenanceModeReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('maintenanceModeStatus', () => {
    it('should set the status', () => {
      const mockStatus = true;
      let state = { status: false };
      state = maintenanceModeReducer(state, maintenanceModeStatus(mockStatus));
      expect(state).toEqual({ status: mockStatus });
    });
  });

  describe('maintenanceModeMsg', () => {
    it('should set the message', () => {
      const mockMsg = {
        msg: 'Connection error. Some pages are unavailable. Please, try again later.',
        translate: 'MAINTENANCE_MODE.CONNECTION_ERROR_MESSAGE',
      };
      let state = { status: false };
      state = maintenanceModeReducer(state, maintenanceModeMsg(mockMsg));
      expect(state).toEqual({ status: false, msg: mockMsg });
    });
  });
});
