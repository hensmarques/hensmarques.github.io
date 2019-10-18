import { ActionsObservable } from 'redux-observable';
import getFileEpic from '../../src/epics/getFile';
import { filePending, fileSuccess, fileFailed } from '../../src/actions';
import types from '../../src/actions/types';

describe('getFileEpic', () => {
  const action$ = ActionsObservable.of({
    type: types.app.getFile,
    accessor: 'document.jpg',
  });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockFile = new File(['test data'], 'document.jpg');
    const mockResponse = { status: 'success', status_code: 'OK', file: mockFile };
    const restApi = { getFile: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [filePending(), fileSuccess(mockResponse.file)];

    const result$ = getFileEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const restApi = { getFile: jest.fn().mockImplementation(() => Promise.reject()) };
    const expectedActions = [filePending(), fileFailed('Unable to locate file.')];

    const result$ = getFileEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
