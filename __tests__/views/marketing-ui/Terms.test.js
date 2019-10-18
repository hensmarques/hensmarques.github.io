import React from 'react';
import Terms from '../../../src/views/marketing-ui/Terms';

// Mock window's scrollTo method
window.scrollTo = jest.fn().mockImplementation(coords => null);

test('<Terms/> renders, scrolls to top, and matches snapshot', () => {
  const location = { state: {} };
  const wrapper = shallow(<Terms location={location} />);
  expect(window.scrollTo).toHaveBeenCalledTimes(1);
  expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  expect(wrapper.state()).toEqual({ modal: 'none' });
  expect(wrapper.find('BlacklistModal').exists()).toBe(false);
  expect(wrapper).toMatchSnapshot();
});

test('<Terms/> renders with blacklist modal', () => {
  const location = { state: { modal: 'blacklist' } };
  const wrapper = shallow(<Terms location={location} />);
  expect(wrapper.state()).toEqual({ modal: 'blacklist' });
  expect(wrapper.find('BlacklistModal').exists()).toBe(true);
});

test('<Terms/> handles blacklistMode prop', () => {
  const location = { state: {} };
  const wrapper = shallow(<Terms location={location} blacklistMode />);
  expect(wrapper.state()).toEqual({ modal: 'blacklist' });
  expect(wrapper.find('BlacklistModal').exists()).toBe(true);
});
