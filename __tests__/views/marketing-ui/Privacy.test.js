import React from 'react';
import Privacy from '../../../src/views/marketing-ui/Privacy';

// Mock window's scrollTo method
window.scrollTo = jest.fn().mockImplementation(coords => null);

test('<Privacy/> renders, scrolls to top, and matches snapshot', () => {
  const location = { state: {} };
  const wrapper = shallow(<Privacy location={location} />);
  expect(window.scrollTo).toHaveBeenCalledTimes(1);
  expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  expect(wrapper.state()).toEqual({ modal: 'none' });
  expect(wrapper.find('BlacklistModal').exists()).toBe(false);
  expect(wrapper).toMatchSnapshot();
});

test('<Privacy/> renders with blacklist modal', () => {
  const location = { state: { modal: 'blacklist' } };
  const wrapper = shallow(<Privacy location={location} />);
  expect(wrapper.state()).toEqual({ modal: 'blacklist' });
  expect(wrapper.find('BlacklistModal').exists()).toBe(true);
});

test('<Privacy/> handles blacklistMode prop', () => {
  const location = { state: {} };
  const wrapper = shallow(<Privacy location={location} blacklistMode />);
  expect(wrapper.state()).toEqual({ modal: 'blacklist' });
  expect(wrapper.find('BlacklistModal').exists()).toBe(true);
});
