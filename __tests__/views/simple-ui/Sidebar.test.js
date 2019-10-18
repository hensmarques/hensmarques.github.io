import React from 'react';
import { Sidebar } from '../../../src/views/simple-ui/Sidebar';

describe('<Sidebar/>', () => {
  it('renders and matches the snapshot', () => {
    const logout = jest.fn();
    const wrapper = shallow(<Sidebar logout={logout} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('fires toggleSidebar callback when close icon is clicked', () => {
    const logout = jest.fn();
    const toggleSidebar = jest.fn();
    const wrapper = shallow(<Sidebar logout={logout} toggleSidebar={toggleSidebar} />);
    expect(toggleSidebar).not.toHaveBeenCalled();
    wrapper.find('.sidebar-icon-close').simulate('click');
    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });

  it('fires logout callback when Logout link is clicked', () => {
    const logout = jest.fn();
    const wrapper = shallow(<Sidebar logout={logout} />);
    expect(logout).not.toHaveBeenCalled();
    wrapper.find('a').simulate('click');
    expect(logout).toHaveBeenCalledTimes(1);
  });
});
