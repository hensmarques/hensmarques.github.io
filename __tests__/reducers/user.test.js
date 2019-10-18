import { status } from '../../src/constants';
import { user as userReducer, authStatus } from '../../src/reducers';
import {
  authPending,
  authSuccess,
  authFailed,
  authNone,
  setLocation,
  setLocationError,
  signupPending,
  signupSuccess,
  signupError,
  signupNone,
  minimalSchemaPending,
  minimalSchemaSuccess,
  minimalSchemaError,
  extendedSchemaPending,
  extendedSchemaSuccess,
  extendedSchemaError,
  setResendVerificationStatus,
  kycStatusPending,
  kycStatusSuccess,
} from '../../src/actions';

describe('userReducer', () => {
  const initialState = {
    authStatus: authStatus.none,
    authError: undefined,
    username: undefined,
    newPasswordStatus: status.none,
    updateProfileStatus: status.none,
    location: {},
    signup: {},
    // changePasswordWithCodeStatus: status.none,
  };
  const mockUsername = 'Sean White';
  const mockLocation = {
    country_long: 'United States',
    country_short: 'US',
    ip: '120.7.15.137',
  };
  const mockLocationError = 'Mock Location Error';
  const mockError = {
    error: 'error_code',
    error_description: 'Error description.',
  };

  const mockSignupError = {
    status_code: 'ERROR_CODE',
    message: 'Error description.',
  };

  it('should set the initial state when nothing is passed in', () => {
    const state = userReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual(initialState);
  });

  it('should return the current state on an unknown action', () => {
    const currentState = initialState;
    const state = userReducer(currentState, { type: '__UNKNOWN' });
    expect(state).toEqual(currentState);
  });

  describe('authPending', () => {
    it('should set the authentication status to pending', () => {
      let state = initialState;
      state = userReducer(state, authPending());
      expect(state).toMatchObject({ authStatus: authStatus.pending });
    });
  });

  describe('authSuccess', () => {
    it('should set the authentication status to success', () => {
      let state = initialState;
      state = userReducer(state, authSuccess(mockUsername));
      expect(state).toMatchObject({
        authStatus: authStatus.success,
        username: mockUsername,
        authError: undefined,
      });
    });
  });

  describe('authFailed', () => {
    it('should set the authentication status to failed', () => {
      let state = initialState;
      state = userReducer(state, authFailed(mockError));
      expect(state).toMatchObject({
        authStatus: authStatus.failed,
        authError: mockError,
      });
    });
  });

  describe('authNone', () => {
    it('should set the authentication status', () => {
      let state = initialState;
      state = userReducer(state, authNone());
      expect(state).toMatchObject({
        authStatus: authStatus.none,
        username: undefined,
      });
    });
  });

  describe('setLocation', () => {
    it('should set the location', () => {
      let state = initialState;
      state = userReducer(state, setLocation(mockLocation));
      expect(state.location).toEqual(mockLocation);
    });
  });

  describe('setLocationError', () => {
    it('should set the location', () => {
      let state = initialState;
      state = userReducer(state, setLocationError(mockLocationError));
      expect(state.locationError).toEqual(mockLocationError);
    });
  });

  describe('signupPending', () => {
    it('should set the signup status to pending', () => {
      let state = initialState;
      state = userReducer(state, signupPending());
      expect(state.signup.status).toEqual(status.pending);
    });
  });

  describe('signupSuccess', () => {
    it('should set the signup status to success', () => {
      let state = initialState;
      state = userReducer(state, signupSuccess());
      expect(state.signup.status).toEqual(status.success);
    });
  });

  describe('signupError', () => {
    it('should set the signup status to failed', () => {
      let state = initialState;
      state = userReducer(state, signupError(mockSignupError));
      expect(state.signup.status).toEqual(status.failed);
      expect(state.signup.error).toEqual(mockSignupError.status_code);
      expect(state.signup.error_description).toEqual(mockSignupError.message);
    });
  });

  describe('signupNone', () => {
    it('should set the signup status', () => {
      let state = initialState;
      state = userReducer(state, signupNone());
      expect(state.signup).toEqual({
        status: status.none,
      });
    });
  });

  describe('minimalSchemaPending', () => {
    it('should set the minimal profile schema status to pending', () => {
      let state = initialState;
      state = userReducer(state, minimalSchemaPending());
      expect(state.minimalProfileSchema).toEqual({
        status: status.pending,
      });
    });
  });

  describe('minimalSchemaSuccess', () => {
    it('should set the minimal profile schema', () => {
      const mockProperties = {
        given_name: { title: 'Given name', type: 'string' },
        surname: { title: 'Surname', type: 'string' },
      };
      const mockRequired = ['given_name', 'surname'];
      let state = initialState;
      state = userReducer(state, minimalSchemaSuccess(mockProperties, mockRequired));
      expect(state.minimalProfileSchema).toEqual({
        status: status.success,
        properties: mockProperties,
        required: mockRequired,
      });
    });
  });

  describe('minimalSchemaError', () => {
    it('should set the minimal profile schema error', () => {
      const mockError = { error: 'mockError' };
      let state = initialState;
      state = userReducer(state, minimalSchemaError(mockError));
      expect(state.minimalProfileSchema).toEqual({
        status: status.failed,
        ...mockError,
      });
    });
  });

  describe('extendedSchemaPending', () => {
    it('should set the extended profile schema status to pending', () => {
      let state = initialState;
      state = userReducer(state, extendedSchemaPending());
      expect(state.extendedProfileSchema).toEqual({
        status: status.pending,
      });
    });
  });

  describe('extendedSchemaSuccess', () => {
    it('should set the extended profile schema', () => {
      const mockProperties = {
        given_name: { title: 'Given name', type: 'string' },
        middle_name: { title: 'Middle name', type: 'string' },
        surname: { title: 'Surname', type: 'string' },
      };
      const mockRequired = ['given_name', 'surname'];
      let state = initialState;
      state = userReducer(state, extendedSchemaSuccess(mockProperties, mockRequired));
      expect(state.extendedProfileSchema).toEqual({
        status: status.success,
        properties: mockProperties,
        required: mockRequired,
      });
    });
  });

  describe('extendedSchemaError', () => {
    it('should set the extended profile schema error', () => {
      const mockError = { error: 'mockError' };
      let state = initialState;
      state = userReducer(state, extendedSchemaError(mockError));
      expect(state.extendedProfileSchema).toEqual({
        status: status.failed,
        ...mockError,
      });
    });
  });

  describe('setResendVerificationStatus', () => {
    it('should set the resend verification status', () => {
      const mockStatus = 'accepted';
      let state = initialState;
      state = userReducer(state, setResendVerificationStatus(mockStatus));
      expect(state.resendVerification).toEqual(mockStatus);
    });
  });

  describe('kycStatusPending', () => {
    it('should set the KYC status status to pending', () => {
      let state = initialState;
      state = userReducer(state, kycStatusPending());
      expect(state.kycStatus).toEqual({
        request: status.pending,
      });
    });
  });

  describe('kycStatusSuccess', () => {
    it('should set the KYC status', () => {
      const mockStatus = {
        status: 'pending',
        creation_time: 1565098427589,
        modification_time: 1565098427589,
        operator_message: '',
      };
      let state = initialState;
      state = userReducer(state, kycStatusSuccess(mockStatus));
      expect(state.kycStatus).toEqual({
        request: status.success,
        ...mockStatus,
      });
    });
  });
});
