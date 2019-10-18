import { ActionsObservable } from 'redux-observable';
import getUserProfileEpic from '../../src/epics/getUserProfile';
import {
  userProfilePending,
  userProfileSuccess,
  userProfileFailed,
  getProfileSchema,
} from '../../src/actions';
import types from '../../src/actions/types';

const mockProfileResponse = {
  custom_profile:
    '{"country":"France","street_address":"Main street","city":"Paris","date_of_birth":963316497000,"surname":"Doe","phone_number":"123456789","state_province":"Paris","given_name":"John","middle_name":"B","postal_code":"ABC123"}',
};
const mockError = 'error';

describe('getUserProfileEpic', () => {
  const action$ = ActionsObservable.of({ type: types.app.getUserProfile });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async (done) => {
    const restApi = { getUserProfile: jest.fn().mockResolvedValue(mockProfileResponse) };
    const expectedActions = [
      userProfilePending(),
      userProfileSuccess(JSON.parse(mockProfileResponse.custom_profile)),
      getProfileSchema(),
    ];

    const result$ = getUserProfileEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async (done) => {
    const restApi = { getUserProfile: jest.fn().mockRejectedValue(mockError) };
    const expectedActions = [userProfilePending(), userProfileFailed(mockError)];

    const result$ = getUserProfileEpic(action$, state$, { restApi });
    return await result$.forEach((action) => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
