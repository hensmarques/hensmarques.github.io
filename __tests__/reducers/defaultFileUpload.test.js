import { defaultFileUpload as defaultFileUploadReducer } from '../../src/reducers/defaultFileUpload';
import { status } from '../../src/constants';
import {
  defaultUploadFilePending,
  defaultUploadFileSuccess,
  defaultUploadFileFailed,
} from '../../src/actions';

describe('defaultFileUploadReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = defaultFileUploadReducer(undefined, { type: '__UNKNOWN', filename: '' });
    expect(state).toEqual({ "status": "NONE", filename: '' });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = {};
    const state = defaultFileUploadReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('defaultUploadFilePending', () => {
    it('should set status to pending', () => {
      let state = {};
      state = defaultFileUploadReducer(state, defaultUploadFilePending());
      expect(state).toEqual({ status: status.pending });
    });
  });

  describe('defaultUploadFileSuccess', () => {
    it('should set status to success and set the filename', () => {
      let state = {};
      const mockFilename = 'document.jpg';
      state = defaultFileUploadReducer(state, defaultUploadFileSuccess(mockFilename));
      expect(state).toEqual({ status: status.success, filename: mockFilename });
    });
  });

  describe('defaultUploadFileFailed', () => {
    it('should set status to failed and set the error', () => {
      let state = {};
      const mockError = 'mockError';
      state = defaultFileUploadReducer(state, defaultUploadFileFailed(mockError));
      expect(state).toEqual({ status: status.failed, error: mockError });
    });
  });
});
