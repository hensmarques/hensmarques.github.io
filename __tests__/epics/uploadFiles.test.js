import { ActionsObservable } from 'redux-observable';
import uploadFilesEpic from '../../src/epics/uploadFiles';
import { fileUploadPending, fileUploadSuccess, fileUploadFailed } from '../../src/actions';
import types from '../../src/actions/types';

describe('uploadFilesEpic', () => {
  const action$ = ActionsObservable.of({
    type: types.user.uploadFiles,
    files: new File(['test data'], 'document.jpg'),
  });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = 'mockSuccessResponse';
    const s3RestApi = { uploadFiles: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [fileUploadPending(), fileUploadSuccess()];

    const result$ = uploadFilesEpic(action$, state$, { s3RestApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockError = 'mockError';
    const s3RestApi = { uploadFiles: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [fileUploadPending(), fileUploadFailed(mockError)];

    const result$ = uploadFilesEpic(action$, state$, { s3RestApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
