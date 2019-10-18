import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import getSecretCodeEpic from '../../src/epics/getSecretCode';
import {
  setSecretCodePending,
  setSecretCode,
  setSecretCodeError
} from '../../src/actions';
import types from '../../src/actions/types';

describe('getSecretCodeEpic', () => {
  const action$ = ActionsObservable.of({ type: types.user.getSecretCode });
  const state$ = of({ secretCode: 'blah' });

  it('dispatches the correct actions when it is successful', async done => {
    const mockResponse = 'foobar';
    const socket = { secretCode: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [setSecretCodePending(), setSecretCode('foobar')];

    const result$ = getSecretCodeEpic(action$, state$, { socket });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async done => {
    const mockError = 'error';
    const socket = { secretCode: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [setSecretCodePending(), setSecretCodeError(mockError)];

    const result$ = getSecretCodeEpic(action$, state$, { socket });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
