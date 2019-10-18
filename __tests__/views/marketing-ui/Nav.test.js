import React from 'react';
import { Nav } from '../../../src/views/marketing-ui/Nav';
import { authStatus } from '../../../src/reducers';

describe('<Nav/>', () => {
  describe('Non-authenticated user view', () => {
    const user = {
      authenticated: false
    };
    const onSignupClick = jest.fn();
    const onLoginClick = jest.fn();
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Nav user={user} />
      );
    });

    it('renders with signup and login links and matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Authenticated user view', () => {
    it('renders with a dashboard link instead of signup/login links', () => {
      const testAuthStatus = authStatus.success;
      const wrapper = shallow(<Nav authStatus={testAuthStatus} />);
      expect(wrapper.find('.signup').exists()).toBe(false);
      expect(wrapper.find('Link').exists()).toBe(true);
      const dashboardLink = wrapper.find('Link');
      expect(dashboardLink.props().to).toBe('/home');
      expect(dashboardLink.props().children).toBe('Dashboard');
    });
  });

  describe('Blacklist mode', () => {
    it('does not render signup, login or dashboard links', () => {
      const user = {
        authenticated: true
      };
      const wrapper = shallow(<Nav user={user} blacklistMode />);
      expect(wrapper.find('.signup').exists()).toBe(false);
      expect(wrapper.find('Link.login').exists()).toBe(false);
      expect(wrapper.find('Link').exists()).toBe(false);
    });
  });
});
