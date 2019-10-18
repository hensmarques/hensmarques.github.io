import { ActionsObservable } from 'redux-observable';
import updateProfileEpic from '../../src/epics/updateProfile';
import {
  updateProfilePending,
  updateProfileSuccess,
  updateProfileFailed,
  updateKycStatus,
} from '../../src/actions';
import types from '../../src/actions/types';

describe('updateProfileEpic', () => {
  const action$ = ActionsObservable.of({
    type: types.app.updateUserProfile,
    kycFormDataPayload: {
      custom_profile: JSON.stringify({
        country: 'France',
        street_address: 'Main street',
        city: 'Paris',
        date_of_birth: 963316497000,
        surname: 'Doe',
        phone_number: '123456789',
        state_province: 'Paris',
        given_name: 'John',
        middle_name: 'B',
        postal_code: 'ABC123',
      }),
    },
  });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const mockResponse = { status_code: 'OK' };
    const restApi = { updateUserProfile: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [updateProfilePending(), updateProfileSuccess(), updateKycStatus()];

    const result$ = updateProfileEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const mockResponse = { status_code: 'ERROR' };
    const restApi = { updateUserProfile: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [updateProfilePending(), updateProfileFailed(mockResponse)];

    const result$ = updateProfileEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
