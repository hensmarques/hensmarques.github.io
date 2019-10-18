import React from 'react';
import { Verification } from '../../src/views/Verification';

const mockHash = '2QVm+XJgdoyjrPL+Camv85CtlHMVVtpB7qFPNhXi6co=';
const mockLocation = { search: `?hash=${mockHash}` };
const verifyUser = jest.fn();

describe('Verification pending', () => {
  it('fires verifyUser callback and renders a verification pending message', () => {
    const verificationStatus = 'PENDING';
    const wrapper = shallow(
      <Verification
        location={mockLocation}
        verifyUser={verifyUser}
        verificationStatus={verificationStatus}
      />,
    );
    expect(verifyUser).toHaveBeenCalledTimes(1);
    expect(verifyUser).toHaveBeenCalledWith(mockHash);
    expect(wrapper.containsMatchingElement(<p>Verifying email...</p>)).toBe(true);
    expect(wrapper.find('Button').length).toBe(0);
  });
});

describe('Verification successful', () => {
  const verificationStatus = 'SUCCESS';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Verification
        location={mockLocation}
        verifyUser={verifyUser}
        verificationStatus={verificationStatus}
      />,
    );
  });

  it('renders a success message and a login link', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <div className="status success">Verification Successful</div>,
        <p>Your account is now verified. Login and start trading.</p>,
      ]),
    ).toBe(true);
    expect(wrapper.find('Button').length).toBe(1);
  });

  it('redirects to login modal when action button is clicked', () => {
    expect(wrapper.state()).toEqual({ redirect: null });
    wrapper.find('Button').simulate('click');
    expect(wrapper.state()).toEqual({ redirect: 'login' });
    expect(wrapper.find('Redirect').length).toBe(1);
    expect(wrapper.find('Redirect').props().to).toEqual({
      pathname: '/',
      state: { modal: 'login' },
    });
  });
});

describe('Verification failed', () => {
  const verificationStatus = 'FAILED';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Verification
        location={mockLocation}
        verifyUser={verifyUser}
        verificationStatus={verificationStatus}
      />,
    );
  });

  it('renders a failure message and login/signup links', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <div className="status failed">Verification Failed</div>,
        <p>You may already be verified. Try logging in or make a new account.</p>,
      ]),
    ).toBe(true);
    expect(wrapper.find('Button').length).toBe(2);
  });

  it('redirects to login modal when login action button is clicked', () => {
    expect(wrapper.state()).toEqual({ redirect: null });
    wrapper
      .find('Button')
      .first()
      .simulate('click');
    expect(wrapper.state()).toEqual({ redirect: 'login' });
    expect(wrapper.find('Redirect').length).toBe(1);
    expect(wrapper.find('Redirect').props().to).toEqual({
      pathname: '/',
      state: { modal: 'login' },
    });
  });

  it('redirects to signup modal when signup action button is clicked', () => {
    expect(wrapper.state()).toEqual({ redirect: null });
    wrapper
      .find('Button')
      .last()
      .simulate('click');
    expect(wrapper.state()).toEqual({ redirect: 'sign up' });
    expect(wrapper.find('Redirect').length).toBe(1);
    expect(wrapper.find('Redirect').props().to).toEqual({
      pathname: '/',
      state: { modal: 'sign up' },
    });
  });
});
