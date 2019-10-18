import { ActionsObservable } from 'redux-observable';
import signupEpic from '../../src/epics/signup';
import { signupPending, signupSuccess, signupError } from '../../src/actions';
import types from '../../src/actions/types';

describe('signupEpic', () => {
  const mockSignupData = {
    city: 'mockCity',
    country: 'mockCountry',
    dateOfBirth: '01-01-1990',
    email: 'foo@bar.com',
    firstName: 'Foo',
    middleName: 'Bar',
    password: 'password',
    phoneNumber: 123456,
    postalCode: 456789,
    state: 'mockState',
    streetAddress: 'mockStreetAddress',
    lastName: 'Biz'
  };
  const action$ = ActionsObservable.of({
    type: types.user.signup,
    signupData: mockSignupData
  });
  const state$ = null;

  it('dispatches the correct actions when it is successful', async done => {
    const mockResponse = { status: 'accepted', status_code: 'OK', message: null };
    const restApi = { signup: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [
      signupPending(),
      signupSuccess()
    ];

    const result$ = signupEpic(action$, state$, { restApi });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });

  it('dispatches the correct actions when it fails', async done => {
    const mockResponse = { status: 'rejected', status_code: 'ERROR', message: null };
    const restApi = { signup: jest.fn().mockResolvedValue(mockResponse) };
    const expectedActions = [
      signupPending(),
      signupError(mockResponse)
    ];

    const result$ = signupEpic(action$, state$, { restApi });
    return await result$.forEach(action => {
      expect(expectedActions).toContainEqual(action);
      done();
    });
  });
});
