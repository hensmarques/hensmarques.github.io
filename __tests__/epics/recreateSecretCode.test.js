import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import recreateSecretCodeEpic from '../../src/epics/recreateSecretCode';
import {
  resetSecretCodePending,
  resetSecretCode,
  resetSecretCodeError
} from '../../src/actions';
import types from '../../src/actions/types';

describe('recreateSecretCodeEpic', () => {
  const action$ = ActionsObservable.of({ type: types.user.recreateSecretCode });
  const state$ = of({ secretCode: 'blah' });

  it('dispatches the correct actions when it is successful', async done => {
    const mockSecretCodeResponse = 'foobar';
    const socket = { resendSecretCode: jest.fn().mockResolvedValue(mockSecretCodeResponse) };
    const expectedActions = [resetSecretCodePending(), resetSecretCode(mockSecretCodeResponse)];

    const result$ = recreateSecretCodeEpic(action$, state$, { socket });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async done => {
    const mockError = 'error';
    const socket = { resendSecretCode: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [resetSecretCodePending(), resetSecretCodeError(mockError)];

    const result$ = recreateSecretCodeEpic(action$, state$, { socket });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
