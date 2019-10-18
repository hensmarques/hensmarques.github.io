import React from 'react';
import { Main } from '../../../src/views/marketing-ui/Main';

describe('<Main/>', () => {
  let wrapper;
  const mockProps = {
    setDisplayMobile: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<Main location={{ modal: null }} {...mockProps} />);
  });

  it('renders and matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('blacklist mode', () => {
    it('renders the BlacklistModal', () => {
      const wrapper = shallow(
        <Main location={{ modal: null }} blacklistMode {...mockProps} />
      );
      expect(wrapper.find('Connect(Nav)').props().blacklistMode).toBe(true);
      expect(wrapper.find('BlacklistModal').exists()).toBe(true);
      expect(wrapper.find('Connect(SignupModal)').exists()).toBe(false);
      expect(wrapper.find('Connect(LoginModal)').exists()).toBe(false);
    });
  });
});
