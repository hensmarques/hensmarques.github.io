import { ActionsObservable } from 'redux-observable';
import defaultFileUploadEpic from '../../src/epics/defaultUploadFile';
import {
  defaultUploadFilePending,
  defaultUploadFileSuccess,
  defaultUploadFileFailed,
} from '../../src/actions';
import types from '../../src/actions/types';

describe('defaultFileUploadEpic', () => {
  const action$ = ActionsObservable.of({
    type: types.user.defaultUploadFile,
    file: new File(['test data'], 'document.jpg'),
  });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = { status: 'success', status_code: 'OK', filename: 'document.jpg' };
    const restApi = { uploadFile: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [
      defaultUploadFilePending(),
      defaultUploadFileSuccess(mockResponse.filename),
    ];

    const result$ = defaultFileUploadEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockError = 'mockError';
    const restApi = { uploadFile: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [defaultUploadFilePending(), defaultUploadFileFailed(mockError)];

    const result$ = defaultFileUploadEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
