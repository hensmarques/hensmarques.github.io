import { ActionsObservable } from 'redux-observable';
import logoutEpic from '../../src/epics/logout';
import { authNone } from '../../src/actions';
import types from '../../src/actions/types';

describe('logoutEpic', () => {
  it('dispatches the correct actions when it is successful', async (done) => {
    const action$ = ActionsObservable.of({ type: types.user.logout });
    const _ = null;
    const auth = { logout: jest.fn().mockImplementation(() => Promise.resolve()) };
    const socket = { disconnect: jest.fn() };
    const managerSocket = { disconnect: jest.fn() };
    const expectedActions = [authNone()];

    const result$ = logoutEpic(action$, _, { auth, socket, managerSocket });
    return await result$.forEach((action) => {
      expect(auth.logout).toHaveBeenCalledTimes(1);
      expect(sessionStorage.removeItem).toHaveBeenCalledTimes(5);
      expect(sessionStorage.removeItem).toHaveBeenCalledWith('access_token');
      expect(sessionStorage.removeItem).toHaveBeenCalledWith('refresh_token');
      expect(sessionStorage.removeItem).toHaveBeenCalledWith('token_expires');
      expect(sessionStorage.removeItem).toHaveBeenCalledWith('token_type');
      expect(sessionStorage.removeItem).toHaveBeenCalledWith('username');
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
