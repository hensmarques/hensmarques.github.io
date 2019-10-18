import { maintenanceMessage as maintenanceMessageReducer } from '../../src/reducers/maintenanceMessage';
import { maintenanceMessageStatus, maintenanceMessageMsg } from '../../src/actions';

describe('maintenanceMessageReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = maintenanceMessageReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({ status: false });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = { status: true };
    const state = maintenanceMessageReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('maintenanceMessageStatus', () => {
    it('should set the status', () => {
      const mockStatus = true;
      let state = { status: false };
      state = maintenanceMessageReducer(state, maintenanceMessageStatus(mockStatus));
      expect(state).toEqual({ status: mockStatus });
    });
  });

  describe('maintenanceMessageMsg', () => {
    it('should set the message', () => {
      const mockMsg = {
        msg: 'Connection error. Some pages are unavailable. Please, try again later.',
        translate: 'MAINTENANCE_MODE.CONNECTION_ERROR_MESSAGE',
      };
      let state = { status: false };
      state = maintenanceMessageReducer(state, maintenanceMessageMsg(mockMsg));
      expect(state).toEqual({ status: false, msg: mockMsg });
    });
  });
});
