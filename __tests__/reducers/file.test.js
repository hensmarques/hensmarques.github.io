import { file as fileReducer } from '../../src/reducers/file';
import { status } from '../../src/constants';
import { filePending, fileSuccess, fileFailed } from '../../src/actions';

describe('fileReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = fileReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({ status: status.none, getFile: { status: status.none } });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = { status: status.none, getFile: { status: status.none } };
    const state = fileReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('filePending', () => {
    it('should set status to pending', () => {
      let state = { status: status.none, getFile: { status: status.none } };
      state = fileReducer(state, filePending());
      expect(state).toEqual({ status: status.pending });
    });
  });

  describe('fileSuccess', () => {
    it('should set status to success and set the file value', () => {
      const mockFile = new File(['test data'], 'document.jpg');
      let state = { status: status.none, getFile: { status: status.none } };
      state = fileReducer(state, fileSuccess(mockFile));
      expect(state).toEqual({ status: status.success, value: mockFile });
    });
  });

  describe('fileFailed', () => {
    it('should set status to failed and set the error', () => {
      const mockError = 'mockError';
      let state = { status: status.none, getFile: { status: status.none } };
      state = fileReducer(state, fileFailed(mockError));
      expect(state).toEqual({ status: status.failed, error: mockError });
    });
  });
});
