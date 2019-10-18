import React from 'react';
import TextInput from '../../../src/elements/form-controls/TextInput';
import { LoginModal } from '../../../src/views/marketing-ui/LoginModal';
import { authStatus, authError } from '../../../src/reducers';

describe('<LoginModal/>', () => {
  describe('Login Form', () => {
    const login = jest.fn();
    const onClose = jest.fn();
    const authNone = jest.fn();
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <LoginModal
          login={login}
          authStatus={authStatus.none}
          authNone={authNone}
        />
      );
    });

    it('renders and matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('dispatches login action from form submit', () => {
      const loginCredentials = {
        password: 'bar'
      };
      const instance = wrapper.instance();
      expect(login).not.toHaveBeenCalled();

      wrapper
        .find('TextInput')
        .at(0)
        .simulate('change', { target: { value: loginCredentials.username } });
      wrapper
        .find('TextInput')
        .at(1)
        .simulate('change', { target: { value: loginCredentials.password } });
      instance.submit();
      expect(login).toHaveBeenCalledWith(
        wrapper.state().formFields.username,
        wrapper.state().formFields.password,
        '',
        ''
      );
    });
  });

  describe('Verification Code Form', () => {
    const login = jest.fn();
    const onClose = jest.fn();
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <LoginModal
          login={login}
          onClose={onClose}
          authStatus={authStatus.failed}
          authError={{ error: authError.verificationCode }}
        />
      );
    });

    it('renders and matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders input for verfication code on verification code authError', () => {
      wrapper.setProps({
        authStatus: authStatus.failed,
        authError: { error: authError.verificationCode }
      });
      expect(wrapper.exists('div.verification-code-form')).toBe(true);
    });

    it('dispatches login action from form submit', () => {
      const loginCredentials = {
        username: 'foo',
        password: 'bar',
        verificationCode: '123456'
      };
      const instance = wrapper.instance();
      const { verificationCode, ...prevState } = loginCredentials;
      wrapper.setState({ formFields: prevState });

      wrapper.find('TextInput').simulate('change', {
        target: { value: verificationCode }
      });
      instance.submit();
      expect(login).toHaveBeenCalledWith(
        wrapper.state().formFields.username,
        wrapper.state().formFields.password,
        wrapper.state().formFields.verificationCode,
        wrapper.state().formFields.confirmationCode,
      );
    });

    it('dispatches login action from verification code form submit', () => {
      const loginCredentials = {
        username: 'foo',
        password: 'bar',
        verificationCode: '123456',
        confirmationCode: '123456',
      };
      const instance = wrapper.instance();
      wrapper.setProps({
        authStatus: authStatus.failed,
        authError: { error: authError.verificationCode }
      });
      wrapper.setState({
        formFields: {
          username: loginCredentials.username,
          password: loginCredentials.password
        }
      });

      wrapper.find('TextInput').simulate('change', {
        target: { value: loginCredentials.verificationCode }
      });
      expect(login).toHaveBeenCalledWith(
        wrapper.state().formFields.username,
        wrapper.state().formFields.password,
        wrapper.state().formFields.verificationCode,
        wrapper.state().formFields.confirmationCode,
      );
    });
  });

  describe('Authentication functionality', () => {
    it('renders an error message if there is an authError for an invalid verification code', () => {
      const mockProps = {
        authStatus: authStatus.failed,
        authError: {
          error: authError.invalidVerificationCode
        }
      };
      const wrapper = shallow(<LoginModal {...mockProps} />);
      expect(wrapper.exists('div.error')).toBe(true);
    });

    it('redirects to home page when user authenticates', () => {
      const testAuthStatus = authStatus.success;
      const wrapper = shallow(<LoginModal authStatus={testAuthStatus} />);
      expect(wrapper.find('Modal').exists()).toBe(false);
      expect(wrapper.find('Redirect').exists()).toBe(true);
      expect(wrapper.find('Redirect').props().to).toBe('/home');
    });
  });
});
