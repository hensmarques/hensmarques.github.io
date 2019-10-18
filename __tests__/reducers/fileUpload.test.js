import { fileUpload as fileUploadReducer } from '../../src/reducers/fileUpload';
import { status } from '../../src/constants';
import { fileUploadPending, fileUploadSuccess, fileUploadFailed } from '../../src/actions';

describe('fileUploadReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = fileUploadReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({ status: status.none, getFile: { status: status.none } });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = { status: status.none, getFile: { status: status.none } };
    const state = fileUploadReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('fileUploadPending', () => {
    it('should set status to pending', () => {
      let state = { status: status.none, getFile: { status: status.none } };
      state = fileUploadReducer(state, fileUploadPending());
      expect(state).toEqual({ status: status.pending, getFile: { status: status.none } });
    });
  });

  describe('fileUploadSuccess', () => {
    it('should set status to success', () => {
      let state = { status: status.none, getFile: { status: status.none } };
      state = fileUploadReducer(state, fileUploadSuccess());
      expect(state).toEqual({ status: status.success, getFile: { status: status.none } });
    });
  });

  // describe('fileUploadFailed', () => {
  //   it('should set status to failed and set the error', () => {
  //     const mockError = 'mockError';
  //     let state = { status: status.none, getFile: { status: status.none } };
  //     state = fileUploadReducer(state, fileUploadFailed(mockError));
  //     expect(state).toEqual({
  //       status: status.failed,
  //       getFile: { status: status.none },
  //       error: mockError,
  //     });
  //   });
  // });
});
