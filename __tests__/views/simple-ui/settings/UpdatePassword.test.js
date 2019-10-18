import React from 'react';
import { createMockStore } from 'redux-test-utils';
import UpdatePassword from '../../../../src/views/simple-ui/settings/UpdatePassword';
import types from '../../../../src/actions/types';

let wrapper;
afterEach(() => {
  if (wrapper) wrapper.unmount();
});

test('user can click a link to start update password process', () => {
  const mockState = { config: { debug: {} }, user: { newPasswordStatus: 'NONE' } };
  const store = createMockStore(mockState);
  wrapper = mountWithStore(<UpdatePassword />, store);
  expect(wrapper.text()).toMatch(/click here to change your password/i);
  wrapper.find('.reset-password > a').simulate('click');
  expect(store.isActionTypeDispatched(types.state.newPasswordPending)).toBe(true);
});

test('the update password form renders in a modal', () => {
  const mockState = { config: { debug: {} }, user: { newPasswordStatus: 'PENDING' } };
  const store = createMockStore(mockState);
  wrapper = mountWithStore(<UpdatePassword />, store);
  expect(wrapper.find('Modal').find('input').length).toBe(3);
  expect(wrapper.find('Modal').text()).toMatch(/old password/i);
  expect(wrapper.find('Modal').text()).toMatch(/new password/i);
  expect(wrapper.find('Modal').text()).toMatch(/confirm password/i);
  expect(wrapper.find('Modal').text()).toMatch(/submit/i);
});

test('user can close modal and cancel update password process', () => {
  const mockState = { config: { debug: {} }, user: { newPasswordStatus: 'PENDING' } };
  const store = createMockStore(mockState);
  wrapper = mountWithStore(<UpdatePassword />, store);
  wrapper
    .find('Modal')
    .props()
    .onClose();
  expect(store.isActionTypeDispatched(types.state.newPasswordNone)).toBe(true);
});

test('User sees an error when the new passwords do not match', () => {
  const mockState = { config: { debug: {} }, user: { newPasswordStatus: 'PENDING' } };
  const store = createMockStore(mockState);
  wrapper = mountWithStore(<UpdatePassword />, store);
  // Simulate user typing different passwords
  wrapper.find({ name: 'new-password' }).simulate('change', { target: { value: 'Password1*' } });
  wrapper
    .find({ name: 'confirm-password' })
    .simulate('change', { target: { value: 'Password2*' } });
  const state = wrapper.find('UpdatePassword').state();
  state.formState['Confirm Password'].active = true;
  wrapper.find('UpdatePassword').setState(state);
  expect(wrapper.find('Modal').text()).toMatch(
    /passwords do not match, confirm both passwords are identical/i,
  );
});

test('User sees an error message regarding wrong old password', () => {
  const mockState = { config: { debug: {} }, user: { newPasswordStatus: 'FAILED' } };
  const store = createMockStore(mockState);
  wrapper = mountWithStore(<UpdatePassword />, store);
  expect(wrapper.find('Modal').text()).toMatch(/wrong old password/i);
});

test('User can submit form and update password', () => {
  const mockState = { config: { debug: {} }, user: { newPasswordStatus: 'PENDING' } };
  const store = createMockStore(mockState);
  wrapper = mountWithStore(<UpdatePassword />, store);
  const oldPassword = 'Password1*';
  const newPassword = 'Password2*';
  wrapper.find({ name: 'old-password' }).simulate('change', { target: { value: oldPassword } });
  wrapper.find({ name: 'new-password' }).simulate('change', { target: { value: newPassword } });
  wrapper.find({ name: 'confirm-password' }).simulate('change', { target: { value: newPassword } });
  expect(wrapper.find('UpdatePassword').state().passwordsMatch).toBe(true);
  wrapper.find('.button.submit-button').simulate('click');
  expect(
    store.isActionDispatched({
      type: types.user.newPassword,
      passwordPayload: {
        password: newPassword,
        new_password: newPassword,
        old_password: oldPassword,
      },
    }),
  ).toBe(true);
});
