import { connectingQueue as connectingQueueReducer } from '../../src/reducers/connectingQueue';
import { connectingQueueAdd } from '../../src/actions';

describe('connectingQueueReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = connectingQueueReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual(new Map());
  });

  it('should return the current state on an unknown action', () => {
    const currentState = new Map();
    const state = connectingQueueReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('connectingQueueAdd', () => {
    it('should add the action to queue', () => {
      let state = new Map();
      const mockAction = { type: 'MOCK_ACTION', payload: 'mockPayload' };
      const expectedState = new Map(state);
      expectedState.set(mockAction.type, mockAction);

      state = connectingQueueReducer(state, connectingQueueAdd(mockAction));
      expect(state).toEqual(expectedState);
    });
  });
});
