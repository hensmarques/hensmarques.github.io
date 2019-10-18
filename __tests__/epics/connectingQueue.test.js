import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import { connectingQueue as connectingQueueEpic } from '../../src/epics/connectingQueue';
import { loadAccounts, logout } from '../../src/actions';
import types from '../../src/actions/types';

const mockActionQueue = [loadAccounts(), logout()];

describe('connectingQueueEpic', () => {
  it('dispatches the actions in the queue', async (done) => {
    const action$ = ActionsObservable.of({ type: types.app.connectingQueueReconnect });
    const state$ = of({ connectingQueue: mockActionQueue });
    const expectedActions = [loadAccounts(), logout()];

    const result$ = connectingQueueEpic(action$, state$);
    return await result$.forEach((action) => {
      expect(mockActionQueue).toContainEqual(action);
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
