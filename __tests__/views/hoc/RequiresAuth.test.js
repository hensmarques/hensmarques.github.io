import React from 'react';
import { createMockStore } from 'redux-test-utils';
import RequiresAuth from '../../../src/views/hoc/RequiresAuth';
import { authStatus } from '../../../src/reducers';

const ComposedComponent = () => <div />;
ComposedComponent.displayName = 'ComposedComponent';
const AuthenticatedComponent = RequiresAuth(ComposedComponent);

test('user sees a loading indicator while the auth status is pending', () => {
  const mockState = { user: { authStatus: authStatus.pending } };
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<AuthenticatedComponent />, store);
  expect(wrapper.find('ComposedComponent').exists()).toBe(false);
  expect(wrapper.text()).toMatch(/loading account.../i);
  expect(wrapper.find('.loader-container').exists()).toBe(true);
  expect(wrapper.find('Spinner').exists()).toBe(true);
});

test('user is redirected to root if not authorized', () => {
  const mockState = { user: { authStatus: authStatus.failed } };
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<AuthenticatedComponent />, store);
  expect(wrapper.find('ComposedComponent').exists()).toBe(false);
  expect(wrapper.find('Redirect').exists()).toBe(true);
  expect(wrapper.find('Redirect').props().to).toBe('/');
});

test('user is redirected to root if logged out', () => {
  const mockState = { user: { authStatus: authStatus.none } };
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<AuthenticatedComponent />, store);
  expect(wrapper.find('ComposedComponent').exists()).toBe(false);
  expect(wrapper.find('Redirect').exists()).toBe(true);
  expect(wrapper.find('Redirect').props().to).toBe('/');
});

test('the composed component renders when user is authorized', () => {
  const mockState = { user: { authStatus: authStatus.success } };
  const store = createMockStore(mockState);
  const wrapper = mountWithStore(<AuthenticatedComponent />, store);
  expect(wrapper.find('ComposedComponent').exists()).toBe(true);
  expect(wrapper.find('RequiresAuth').props()).toEqual(wrapper.find('ComposedComponent').props());
});
